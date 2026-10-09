# Eval: does Claude pick get_issue on its own?

Question, no hint: "What is Excalidraw issue 11404 about? Who is working on it?"
Marker: the author's account login `pidanoyes` comes only from the API; the page shows the signature "Arthur".

| Description | Tools enabled | Tool loading | Result |
|---|---|---|---|
| v1 | all connectors, web on | when needed | read the web page |
| v1 | qa-agent only, web search off | when needed | read the web page |
| v1 | explicit "use get_issue" | when needed | get_issue |
| v2: "prefer it over the web page" | qa-agent only, web search off | when needed | get_issue |
| v2 | all connectors (~100 tools), web on | when needed | read the web page, tried the API URL directly |
| v2 | all connectors (~100 tools), web on | already loaded | read the web page |
| v3: + assignees | all connectors, web on | "Loaded tools" step seen | page → API failed → loaded tools → get_issue (question: "Who is assigned...") |

Findings:
- With only qa-agent enabled, one sentence in the description changed the choice to get_issue.
- With all connectors enabled, the model reads the web page first and uses get_issue only as a fallback, when the page lacks the answer.
- The v3 trace shows a "Loaded tools" step, so tool descriptions were loaded on demand. The "already loaded" run may not have applied the setting; to recheck in a new chat.
- Wording matters: "Who is assigned" matches "assignees" in the description.
- One run per condition.

Next: recheck "already loaded" in a new chat; three runs per condition; change one thing at a time (tool name, then server name).