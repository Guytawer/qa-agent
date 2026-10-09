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

Findings:
- With only qa-agent enabled, one sentence in the description changed the choice to get_issue.
- With about 100 tools enabled, the model read the web page in both loading modes. The hypothesis "the model did not see the description" is not confirmed.
- Open candidates: run-to-run variance, the server name qa-agent next to the work connector QA Agent, the generic tool name get_issue, a strong habit of reading GitHub pages.
- The tool drops `assignees`, so the model could not answer "who is assigned".
- One run per condition.

Next: three runs per condition; change one thing at a time (tool name, then server name).