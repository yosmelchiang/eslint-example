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
      'no-useless-return': 'error', // No useless returns
      'prefer-const': 'error', // Use const whenever possible
      'prefer-destructuring': ['error', { object: true, array: true }], // Always destructure
      'prefer-object-spread': 'error', // no Object.assign
      'prefer-template': 'error', // Enforce template literals
      'new-cap': ['error', { newIsCap: true, capIsNew: false }], // Class names must start with an uppercase letter
      'func-name-matching': ['error', 'always', { considerPropertyDescriptor: true }], // Function names must start with a lowercase letter
      'no-useless-rename': 'error', // no useless renaming (e.g., `const user = user`)
      'no-var': 'error', // use `let` or `const`
      'prefer-arrow-callback': 'error', // arrow functions ftw
      'arrow-body-style': ['error', 'always'], // Always use `{}` in arrow functions
      'no-const-assign': 'error', // Dont mess with immutable objects
      'guard-for-in': 'error', // Prevent `for...in` without checking `hasOwnProperty`
      'no-else-return': ['error', { allowElseIf: false }], // Unnecessary else blocks after a return statement
      'no-useless-catch': 'error', // Prevent unnecessary catch clauses that simply re-throw the error without doing anything
      'require-await': 'error' // Enforce usage of await in async functions
    }
  }
]);
