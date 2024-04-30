const project = './tsconfig.json';

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: [
    require.resolve('@vercel/style-guide/eslint/node'),
    require.resolve('@vercel/style-guide/eslint/typescript'),
    require.resolve('@vercel/style-guide/eslint/browser'),
    require.resolve('@vercel/style-guide/eslint/react'),
    require.resolve('@vercel/style-guide/eslint/next'),
  ],
  plugins: ['drizzle'],
  parserOptions: {
    project,
  },
  globals: {
    React: true,
  },
  settings: {
    'import/resolver': { typescript: { project } },
    /**
     * enable MUI Joy components to be checked
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y?tab=readme-ov-file#configurations}
     */
    'jsx-a11y': {
      polymorphicPropName: 'component',
      components: {
        Button: 'button',
        Icon: 'svg',
        IconButton: 'button',
        Image: 'img',
        Input: 'input',
        Link: 'a',
        List: 'ul',
        ListItem: 'li',
        ListItemButton: 'button',
      },
    },
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',

    camelcase: 'warn',
    '@typescript-eslint/no-confusing-void-expression': [
      'error',
      { ignoreArrowShorthand: true },
    ],
    // "@typescript-eslint/naming-convention": {
    //   format: ['camelCase', 'PascalCase', 'snake_case', 'UPPER_CASE'],
    // },
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
      },
    ],
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/no-misused-promises': [
      'error',
      { checksVoidReturn: false },
    ],
    'react/function-component-definition': [
      'warn',
      {
        namedComponents: [
          'function-declaration',
          'function-expression',
          'arrow-function',
        ],
        unnamedComponents: 'arrow-function',
      },
    ],
    // sort import statements
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
        alphabetize: { order: 'asc' },
      },
    ],
    // sort named imports within an import statement
    'sort-imports': ['warn', { ignoreDeclarationSort: true }],
    '@typescript-eslint/array-type': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    'no-console': 'warn',
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
      },
    ],
    'import/no-default-export': 'off',
    '@typescript-eslint/require-await': 'off',
    'drizzle/enforce-delete-with-where': 'error',
    'drizzle/enforce-update-with-where': 'error',
  },
};
