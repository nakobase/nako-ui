import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-plugin-prettier';
import importPlugin from 'eslint-plugin-import';
import sortKeysFix from 'eslint-plugin-sort-keys-fix';
import typescriptSortKeys from 'eslint-plugin-typescript-sort-keys';
import unusedImports from 'eslint-plugin-unused-imports';
import react from 'eslint-plugin-react';
import storybook from 'eslint-plugin-storybook';

export default tseslint.config(
  {ignores: ['dist']},
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: prettier,
      import: importPlugin,
      'sort-keys-fix': sortKeysFix,
      'typescript-sort-keys': typescriptSortKeys,
      'unused-imports': unusedImports,
      react: react,
      storybook: storybook,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        {allowConstantExport: true},
      ],
      'prettier/prettier': 'error',
      'sort-keys-fix/sort-keys-fix': 'error',
      'typescript-sort-keys/interface': 'error',
      'unused-imports/no-unused-imports': 'error',
      'react/jsx-sort-props': [
        'error',
        {
          callbacksLast: true,
          shorthandFirst: true,
          shorthandLast: false,
          ignoreCase: true,
          noSortAlphabetically: false,
          reservedFirst: true,
        },
      ],
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          pathGroups: [
            {
              pattern: '{react,react-dom/**,react-router-dom}',
              group: 'builtin',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          alphabetize: {
            order: 'asc',
          },
        },
      ],
    },
  },
)
