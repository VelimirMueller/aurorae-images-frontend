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
  rules: {

  },
  'overrides': [
    {
      'files': [
        '*.vue',
        '*.ts'
      ],
      rules: {
        '@typescript-eslint/indent': ['error', 2],
        "indent": ["error", 2],
        'vue/html-indent': ['error', 2, {
            'attribute': 1,
            'baseIndent': 1,
            'closeBracket': 0,
            'alignAttributesVertically': true,
            'ignores': []
          }],
          'vue/singleline-html-element-content-newline': 'off',
          'vue/multiline-html-element-content-newline': 2,
          'vue/attribute-hyphenation': ['error', 'always'],
          'vue/html-self-closing': ['error', {
            'html': {
              'void': 'always',
              'normal': 'always',
              'component': 'always'
            },
            'svg': 'always',
            'math': 'always'
          }],
          'vue/html-closing-bracket-newline': ['error', {
            'singleline': 'never',
            'multiline': 'always'
          }],
          'vue/html-closing-bracket-spacing': ['error', {
            'startTag': 'never',
            'endTag': 'never',
            'selfClosingTag': 'always'
          }],
          'vue/attributes-order': ['error', {
            'order': [
              'DEFINITION',
              'LIST_RENDERING',
              'CONDITIONALS',
              'RENDER_MODIFIERS',
              'GLOBAL',
              ['UNIQUE', 'SLOT'],
              'TWO_WAY_BINDING',
              'OTHER_DIRECTIVES',
              'OTHER_ATTR',
              'EVENTS',
              'CONTENT'
            ]
          }],
          'vue/order-in-components': ['error', {
            'order': [
              'el',
              'name',
              'key',
              'parent',
              'functional',
              ['delimiters', 'comments'],
              ['components', 'directives', 'filters'],
              'extends',
              'mixins',
              'inheritAttrs',
              'model',
              ['props', 'propsData'],
              'data',
              'computed',
              'watch',
              'LIFECYCLE_HOOKS',
              'methods',
              'head',
              ['template', 'render'],
              'renderError'
            ]
          }]
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
