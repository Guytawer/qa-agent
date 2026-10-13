// One turn of Claude Code in headless mode, shared by the eval runner and the autonomous runner.
// Returns the final text, every tool call with its outcome, and the calls Claude Code itself denied.
import { spawnSync } from "node:child_process";

export type ToolCall = { name: string; input: string; error: boolean; result: string };
export type TurnResult = { text: string; tools: string[]; calls: ToolCall[]; denied: string[]; isError: boolean };

export type TurnOptions = {
  cwd: string;
  mcpConfig: string;
  sessionId: string;
  first: boolean;
  message: string;
  builtinTools: string; // --tools: the only built-in tools that exist in the session
  allowed: string[]; // --allowedTools: the calls that run without asking; with no prompts, everything else is denied
  settingSources?: string;
  timeoutMs?: number;
};

export function claudeTurn(o: TurnOptions): TurnResult {
  const args = [
    "-p",
    "--output-format", "stream-json",
    "--verbose",
    o.first ? "--session-id" : "--resume", o.sessionId,
    "--mcp-config", o.mcpConfig,
    "--strict-mcp-config",
    "--tools", o.builtinTools,
    "--allowedTools", ...o.allowed,
    "--permission-prompts", "none",
    "--setting-sources", o.settingSources ?? "project",
  ];
  // On Windows "claude" is a .cmd file that needs a shell; pass one quoted command line instead of
  // an argument list, so nothing is concatenated unescaped.
  const quote = (a: string) => (/^[\w@%+=:,./\\-]+$/.test(a) ? a : `"${a.replace(/"/g, '\\"')}"`);
  const run = spawnSync(["claude", ...args].map(quote).join(" "), {
    cwd: o.cwd,
    input: o.message,
    encoding: "utf8",
    timeout: o.timeoutMs ?? 20 * 60 * 1000,
    maxBuffer: 64 * 1024 * 1024,
    shell: true,
  });
  if (run.error) throw run.error;

  const tools: string[] = [];
  const byId = new Map<string, ToolCall>();
  const calls: ToolCall[] = [];
  let result: any = null;
  for (const line of (run.stdout ?? "").split("\n")) {
    if (!line.trim().startsWith("{")) continue;
    let event: any;
    try {
      event = JSON.parse(line);
    } catch {
      continue;
    }
    for (const part of event?.message?.content ?? []) {
      if (part?.type === "tool_use") {
        tools.push(part.name);
        const call = { name: part.name, input: JSON.stringify(part.input ?? {}).slice(0, 200), error: false, result: "" };
        byId.set(part.id, call);
        calls.push(call);
      }
      if (part?.type === "tool_result" && byId.has(part.tool_use_id)) {
        const call = byId.get(part.tool_use_id)!;
        call.error = !!part.is_error;
        const content = Array.isArray(part.content) ? part.content.map((c: any) => c?.text ?? "").join(" ") : String(part.content ?? "");
        call.result = content.replace(/\s+/g, " ").slice(0, 200);
      }
    }
    if (event.type === "result") result = event;
  }
  if (!result) {
    throw new Error(`Claude Code returned no result (exit ${run.status}).\n${(run.stderr ?? "").slice(0, 2000)}`);
  }
  const denied = (result.permission_denials ?? []).map((d: any) => `${d.tool_name}: ${JSON.stringify(d.tool_input ?? {}).slice(0, 160)}`);
  return { text: String(result.result ?? ""), tools, calls, denied, isError: !!result.is_error };
}
