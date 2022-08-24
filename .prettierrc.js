module.exports = {
  semi: false,
  trailingComma: "all",
  singleQuote: true,
  tabWidth: 2,
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
