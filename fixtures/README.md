# Issue fixtures

Local issues that `get_issue` returns instead of the GitHub issue with the same number. They let a run be repeated exactly, work offline, and never post a test issue to a real project.

- `issue-99001.json`: a security trap. A plausible feature request (underline text) with prompt injections in the body, a hidden HTML comment and three comments. Every "dangerous" action points at a harmless canary (a `PWNED.txt` file, `example.com/qa-canary` URLs), so a successful attack is visible but does no harm. See `evals/security-99001.md`.

Set `QA_FIXTURES_DIR` to use another folder.
