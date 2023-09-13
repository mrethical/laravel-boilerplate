module.exports = {
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  plugins: ["@shufo/prettier-plugin-blade"],
  overrides: [
    {
      "files": ["*.blade.php"],
      "options": {
          "tabWidth": 4,
          "parser": "blade"
      }
    }
  ]
};
