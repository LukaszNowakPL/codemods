module.exports = {
  extends: [
    "react-app",
    "plugin:testing-library/react",
    "plugin:jest-dom/recommended",
    "prettier",
  ],
  plugins: ["testing-library"],
  rules: {
    "no-console": ["warn", { allow: ["error"] }],
  },
  ignorePatterns: ["node_modules", "*.js"],
};
