module.exports = {
  extends: [
    // Stylelint推荐的可共享 Vue 配置
    'stylelint-config-recommended-vue',
    // 对css的属性进行排序
    'stylelint-config-rational-order',
    // 解决stylelint和prettier之间的冲突
    'stylelint-config-prettier',
  ],
  plugins: ['stylelint-selector-no-empty'],
  rules: { 'plugin/stylelint-selector-no-empty': true },
  // 使用postcss-less对less文件进行转换,让stylelint能lint less文件
  customSyntax: 'postcss-less',
  // 自动fix
  fix: true,
}
