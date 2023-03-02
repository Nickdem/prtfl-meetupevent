module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  // extends: [
  //   "plugin:@typescript-eslint/recommended",
  //   "eslint-config-airbnb-base",
  //   "plugin:prettier/recommended",
  // ],
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
};

// {
//   "parser": "@typescript-eslint/parser",
//   "parserOptions": {
//     "ecmaVersion": 12,
//     "sourceType": "module"
//   },
//   "plugins": ["@typescript-eslint"],
//   "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
//   "rules": {

//   },
//   "env": {
//     "browser": true,
//     "es2021": true
//   },
// }
