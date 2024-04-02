module.exports = {
  'root': true,
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true,
    'jquery': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:prettier/recommended',
    '@vue/eslint-config-prettier'
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'vue'
  ],
  'rules': {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ]
  }
}
