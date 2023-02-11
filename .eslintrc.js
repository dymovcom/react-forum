module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
  ],
  rules: {
    quotes: ["error", "double"],
    "react/function-component-definition": "off",
    "react/jsx-filename-extension": [2, { extensions: [".js", ".jsx", ".tsx"] }],
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "react/require-default-props": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "warn",
    "import/extensions": "off",
    "no-shadow": "off",
    "no-underscore-dangle": "off",
  },
  globals: {
    __IS_DEV__: true,
    JSX: true,
  },
};
