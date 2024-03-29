module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    // 具体请查看https://eslint.vuejs.org/user-guide/#usage
    'plugin:vue/vue3-strongly-recommended',
    // 一个社区的js规范
    'airbnb-base',
    // 解决eslint和prettier冲突
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'no-unused-expressions': 'off',
    'no-plusplus': 'off',
    semi: ['error', 'never'],
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-restricted-syntax': 'off',
    'vue/multi-word-component-names': 'off',
    'no-use-before-define': 'off',
    'no-param-reassign': 'off',
    camelcase: 'off',
    'vue/no-export-in-script-setup': 'off',
    'import/first': 'off',
    'no-shadow': 'off',
  },
  globals: {
    __WebpackModuleApi: 'writable',
  },
}
