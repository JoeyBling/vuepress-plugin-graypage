'use strict';

/** 默认配置 */
const config = require('./package.json');

/* 全局默认配置(插件定义的常量) */
module.exports = {
  // 是否开启控制台日志打印(default: false)
  log: false,
  // 名称
  pluginName: config.name,
  // 主页
  homepage: config.homepage,
  // 描述
  description: config.description,
  // 月+日(不能使用0打头)
  mournDay: ['5-12'],
  // 年+月+日
  date: ['2020-4-4'],
  // 特殊的日期(例如：清明节等...建议使用默认即可)
  special: ['QinMing']
};
