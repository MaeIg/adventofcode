module.exports = {
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  env: {
    node: true,
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2022,
  },
};
