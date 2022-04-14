module.exports = {
  plugins: ['@typescript-eslint', 'eslint-comments', 'prettier'],
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:eslint-comments/recommended',
    'prettier',
  ],
  env: {
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'prettier/prettier': ['error'],
    'no-continue': 'off',
    'default-case': 'off',
    'no-restricted-syntax': 'off',
    '@typescript-eslint/restrict-template-expressions': 'error',
    'no-restricted-globals': 'off',
    'react/state-in-constructor': 'off',
    'react/destructuring-assignment': 'off',
    'eslint-comments/no-unlimited-disable': 'warn',
    'consistent-return': 'off',
    'prefer-promise-reject-errors': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'no-plusplus': 'off',
    'react/prop-types': 'off',
    'import/no-mutable-exports': 'off',
    'no-alert': 'off',
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
    'react/jsx-no-useless-fragment': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/default-param-last': 'off',
    'react/no-array-index-key': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'jsx-a11y/no-autofocus': 'warn',
    'jsx-a11y/anchor-has-content': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/control-has-associated-label': 'warn',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-cycle': 'off',
    'import/order': 'off',
    '@typescript-eslint/no-throw-literal': 'off',
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
  },
};
