// .eslintrc.js
module.exports = {
  "parser": "@babel/eslint-parser",
  "parserOptions": { "requireConfigFile" : "false" },
  "babelOptions": { "configFile": "./.babelrc", },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  plugins: ['prettier', 'import', 'react'],
  extends: ['eslint:recommended', 'airbnb', 'plugin:prettier/recommended'],
  rules: {
    quotes: [1, 'single'],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'no-console': 0,
    'no-unused-vars': 'warn',
    'react/prop-types': 0,
  },
};
