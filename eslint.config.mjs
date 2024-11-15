// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import js from '@eslint/js'
import typescript from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'

export default withNuxt([
  js.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.vue'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
    },
    rules: {
      // Your custom rules go here
      'no-console': 'warn',
      semi: ["warn", "always"],
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      // Add more rules as needed
    },
  },
])