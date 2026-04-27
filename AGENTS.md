# AGENTS.md

## Project Overview
- **Project:** [DonationSite] — [A website that displays various children's hospitals that users can donate money to children in need.]
- **Target user:** [Anyone]
- **My skill level:** [expert]
- **Stack:**
    - Angular 21 (Standalone Architecture)
    - Typescript
    - Angular Signals for state management
    - PrimeNG for theme and style conformity
    - Yarn package manager for dependency management

## Commands
- Always prompt me when a Command is run or needs to be run.
- DO NOT install, add, upgrade, or remove a package without my confirmation.
- **Install:** [`yarn install`]
- **Add Dependency:** [`yarn add [package]`, `yarn add [package]@[version]`, `yarn add [package]@[tag]`]
- **Upgrade Dependency:** [`yarn upgrade [package]`, `yarn upgrade [package]@[version]`, `yarn upgrade [package]@[tag]`]
- **Remove Dependency** [`yarn remove [package]`]
- **Dev:** [Run `npm run start` for a dev server. The application will automatically reload if you change any of the source files.]
- **Build:** [Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.]
- **Clean:** [Run `npm run clean` to clean artifacts.]
- **Test:** [Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io)]
- **Lint:** [Run `npm run verify` to execute ESLint, run Tests, and run build]

## Coding Rules
- **Standalone:** All components, directives, and pipes must be standalone. Avoid NgModules unless absolutely neccessary.
- **Signals:** Prefer signal-based inputs `input()` and outputs `output()` over RxJS for component state.
- **DI:** Use the `inject()` function for all service injections.
- **Templates:** Use modern control flow (`@if`, `@for`, `@switch`) instead of structural directives like `*ngIf`.
- **Performance:** Set `changeDetection: ChangeDetectionStrategy.OnPush` on all components.
- **Naming Convention:** Use camelCase for Classes, Interfaces, Methods, etc.


## File Naming and Structure
- **Naming:** 
    - [`name.component.ts`, `name.component.html`, `name.component.css`]
    - [`longer-hyphenated-name.component.ts`, `longer-hyphenated-name.component.ts`, `longer-hyphenated-name.component.ts`]
- **File Structure:**

## Prohibitions
- Do not use `any` types; define interfaces or types for all data models.
- Do not delete `package-lock.json` or `yarn.lock`.

## Do
- Read existing code before modifying anything
- Match existing patterns, naming, and style
- Handle errors gracefully — no silent failures
- Keep changes small and scoped to what was asked
- Run dev/build after changes to verify nothing broke
- Always ask clarifying questions before guessing

## Don't
- Install new dependencies without asking
- Delete or overwrite files without confirming
- Hardcode secrets, API keys, or credentials
- Rewrite working code unless explicitly asked
- Push, deploy, or force-push without permission
- Make changes outside the scope of the request

## When Stuck
- If a task is large, break it into steps and confirm the plan first
- If you can't fix an error in 2 attempts, stop and explain the issue

## Testing
- Run existing tests after any change
- Add at least one test for new features
- Never skip or delete tests to make things pass

## Git
- Do not commit anything without my approval
- Small, focused commits with descriptive messages
- Never force push

## Response Style
- always respond with clear & concise messages
- use plain English when explaining to the User
- avoid long sentences, complex words, emojis, or long paragraphs