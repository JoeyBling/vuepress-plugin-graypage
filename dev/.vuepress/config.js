// .vuepress/config.js
module.exports = {
  /* 使用插件 */
  plugins: [
    [
      require('../../index'), {
        // 是否开启控制台日志打印(default: false)
        log: true,
        // 月+日
        mournDay: [getMonthAndDate()],
        // 年+月+日
        date: [getDate()],
        // 特殊的日期(例如：清明节等...建议使用默认即可)
        special: ['qinMing']
      }
    ]
  ],
  themeConfig: {
    nav: [{
      text: 'Home',
      link: '/'
    }, {
      text: '关于我',
      link: '/about/'
    }, ],
    /** 1.2.0+ 页面滚动效果(开启会导致：鼠标手势向下滑动太慢了) */
    smoothScroll: true
  },
}

// 获取月日
function getMonthAndDate(date = new Date()) {
  let str = '';
  str += date.getMonth() + 1;
  str += '-' + date.getDate();
  return str;
}

// 获取年月日
function getDate(date = new Date()) {
  let str = '';
  str += date.getFullYear();
  str += '-' + (date.getMonth() + 1);
  str += '-' + date.getDate();
  return str;
}
