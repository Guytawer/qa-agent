# Test case conventions

Edit this file for each team. The skill follows it over its own defaults.

## Case template
Every case uses exactly these lines, in this order. No other header lines (no separate "ID" or "Issue" line).

```
## <ID> <Title>
Action: update C-xxx | create | retire C-xxx
Area: <product area>
Priority: High | Medium | Low · Type: functional | negative | boundary | permissions | regression
Tags: #<issue number>

Preconditions: <state>

<data table, only if the case has one, followed by one line on why these values were chosen>

Steps:
1. <one action>

Expected result:
- <observable fact>
```

- `Action`, `Area` and `Tags` are for change sets. Cases in `cases/` keep only the heading, `Priority · Type`, preconditions, steps and expected result.
- Group cases under a `# <Area>` heading per product area.
- ID: the existing id for an update or retire, `TC-<n>` for a new case.

## Titles
- Short noun phrase naming the subject: `Login form: password field`, `Export to PNG`.
- No "Verify", "Check", "Test" prefixes. No expected result in the title.
- Quote exact UI labels in double quotes: `"Save" button`.

## Preconditions
- Declarative facts about state: `User is logged in as Editor`, `Board contains 3 shapes`.
- Omit only when step 1 is the entry point.

## Steps
- Numbered, one action per step, imperative mood: `Click "Export"`.
- Concrete test data inside the step: `Enter "a@b.c"`, not `Enter valid email`.

## Expected result
- Observable outcome, present tense.
- Several independent facts as a bullet list.
- Never empty.

## Priority
- High: core flow, data loss, security, money.
- Medium: secondary flows, common errors.
- Low: cosmetic, rare edge cases.
- High stays a minority: roughly a quarter of the cases or fewer. If more, re-check each High against the definition above.

## Organization
- Cases are grouped by product area, not by ticket.
- Ticket or issue ID goes into a tag or link field, not into the title.
- Changed behavior updates the existing case instead of creating a duplicate.

## Language
- Cases in English unless the team says otherwise.
