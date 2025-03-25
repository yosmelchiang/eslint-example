## 1. NPM Project

We need a `package.json` file.
```bash
npm init -y
```
## 2. ESLint
We need to install eslint either globally or on the project, we will install it on the project for now.
```bash
npm install eslint
```
## 3. ESLint Configuration
We need to configure it
```bash
npx eslint --init
```
Follow the instructions to finish configuration.

### Example of prompts

```
How would you like to use ESLint? (Use arrow keys)
  To check syntax only
  To check syntax and find problems
  To check syntax, find problems, and enforce code style

What type of modules does your project use? (Use arrow keys)
  JavaScript modules (import/export)
  CommonJS (require/exports)
  None of these

Which framework does your project use? (Use arrow keys)
  React
  Vue.js
  None of these

Does your project use TypeScript? (y/N)

Where does your code run? (Use arrow keys)
  Browser
  Node
  Both

What format do you want your config file to be in? (Use arrow keys)
  JSON
  JavaScript
  YAML
```
A config file will be created when done.
## 4. Configure ESLint (Optional)

We might want to add our own configuration, or use the stock settings. We will use our own configuration for a node project.

```javascript
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: { globals: globals.node, sourceType: 'script' },
    plugins: { js },
    extends: ['js/recommended'],
    rules: {
      semi: ['error', 'always'], // Require semicolons
      indent: ['error', 2], // Enforce 2-space indentation
      quotes: ['error', 'single'], // Use single quotes
      'no-unused-vars': ['warn', { args: 'none', ignoreRestSiblings: true }], // Prevent accidental unused variables
      'max-depth': ['warn', 4], // no deep nesting
      complexity: ['warn', 10], // no function complexity
      'no-shadow': 'error', // no variable shadowing
      'prefer-promise-reject-errors': 'error', // Ensure proper error handling
      camelcase: ['error', { properties: 'always' }], // camelCase for variables & functions
      "no-useless-return": "error", // No useless returns
      "prefer-const": "error", // Use const whenever possible
      "prefer-destructuring": ["error", { object: true, array: true }], // Always destructure
      "prefer-object-spread": "error", // no Object.assign
      'prefer-template': 'error', // Enforce template literals
      'new-cap': ['error', { newIsCap: true, capIsNew: false }], // Class names must start with an uppercase letter
      'func-name-matching': ['error', 'always', { considerPropertyDescriptor: true }], // Function names must start with a lowercase letter
      'no-useless-rename': 'error', // no useless renaming (e.g., `const user = user`)
      'no-var': 'error', // use `let` or `const`
      'prefer-arrow-callback': 'error', // arrow functions ftw
      "arrow-body-style": ["error", "always"], // Always use `{}` in arrow functions
      "no-const-assign": "error", // Dont mess with immutable objects
      "guard-for-in": "error", // Prevent `for...in` without checking `hasOwnProperty`
      "no-else-return": ["error", { allowElseIf: false }], // Unnecessary else blocks after a return statement
      "no-useless-catch": "error", // Prevent unnecessary catch clauses that simply re-throw the error without doing anything
      'require-await': 'error', // Enforce usage of await in async functions
    }
  }
]);

```
## 5. Run ESLint

To check each JavaScript files for issues, use:

```bash
npx eslint file.js
```

For example, to lint `index.js`, run:

```bash
npx eslint index.js
```

This will show any errors or warnings according to the `rules` defined in the `.eslintrc` file.

## 6. Automatically Fix Problems (Optional)

```bash
npx eslint --fix file.js
```

This will fix any issues that can be automatically resolved such as indentation or missing semicolons.

---

### Summary of commands:

1. Initialize npm project (create `package.json`):
    ```bash
    npm init -y
    ```

2. Install ESLint:
    ```bash
    npm install eslint --save-dev
    ```

3. Initialize ESLint:
    ```bash
    npx eslint --init
    ```

4. Configure ESLint (edit `.eslintrc.js` or `.eslintrc.json`).

5. Run ESLint:
    ```bash
    npx eslint file.js
    ```

6. Auto-fix issues:
    ```bash
    npx eslint --fix file.js
    ```

---