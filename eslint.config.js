// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';
import tsESLint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import pluginJest from 'eslint-plugin-jest';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import { defineFlatConfig } from 'typescript-eslint';

export default defineFlatConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    ignores: [
      'node_modules',
      'dist',
      'build',
      'coverage',
      'eslint.config.js',
      'vite.config.js',
      'babel.config.cjs',
      'jest.config.js',
      'setup-tests.ts',
    ],
    plugins: {
      '@typescript-eslint': tsESLint.plugin,
      react: pluginReact,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      jest: pluginJest,
      prettier: prettierPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
        ...globals.jest,
      },
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      ...prettierConfig.rules,
      ...pluginJest.configs.recommended.rules,
      'prefer-const': 'error',
      'react/react-in-jsx-scope': 'off',
      'jest/expect-expect': 'off',
    },
    settings: {
      react: { version: 'detect' },
    },
    extends: [js.configs.recommended, pluginReact.configs.flat['jsx-runtime']],
  },

  ...tsESLint.configs.recommended,
  js.configs.recommended,
  ...pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime'],
  pluginJest.configs.recommended,
]);
