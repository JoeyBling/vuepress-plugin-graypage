const {
  path
} = require('@vuepress/shared-utils')

// 默认插件配置
const defaultPluginConfig = require('./default_plugin_config');

// 自定义插件实现
module.exports = (options = {}) => ({
  name: defaultPluginConfig.pluginName,
  /* 在应用初始化之后，并在某些特定的函数式 API 执行之前执行 */
  async ready() {
    // Object.assign函数为浅拷贝(后面的属性会覆盖前面的属性) | lodash为深拷贝
    options = Object.assign({}, defaultPluginConfig, options);
  },
  define() {
    if (options.log) {
      console.log && console.log(`"加载${options.pluginName}插件配置：${JSON.stringify ? JSON.stringify(options) : options}`);
    }
    return {
      GRAY_PAGE_PLUGIN_OPTIONS: JSON.stringify(options)
    }
  },
  clientRootMixin: path.resolve(__dirname, './clientRootMixin.js')
})
