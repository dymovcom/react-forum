module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:storybook/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "i18next", "prettier"],
  rules: {
    quotes: ["error", "double"],
    "react/function-component-definition": "off",
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".tsx"] },
    ],
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
    "i18next/no-literal-string": ["error", { markupOnly: true }],
    // "max-len": ["error", { code: 80, ignoreComments: true }],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "./config/**/*",
          "test.{ts,tsx}",
          "test-*.{ts,tsx}",
          "**/*.{test,spec}.{ts,tsx}",
          "**/jest.config.ts",
          "**/setupTests.ts",
          "**/renderWithTranslation.tsx",
          "**/*.stories.{ts,tsx}",
          "./src/shared/config/storybook/**/*",
        ],
        optionalDependencies: false,
      },
    ],
  },
  globals: {
    __IS_DEV__: true,
  },
};
