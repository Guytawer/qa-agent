# Test case conventions

Edit this file for each team. The skill follows it over its own defaults.

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
