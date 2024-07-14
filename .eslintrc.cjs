/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'env': {
    'browser': true,
    'node': true,
    'es2021': true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  'overrides': [
    {
    'files': [
      '*.js',
      '*.vue',
      '*.ts'
    ],
    rules: {
      "indent": ["error", 2]
    }
  }
],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
