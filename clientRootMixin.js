// https://github.com/pup/graypage
import {
  gray,
  stopGray
} from 'graypage';

export default {
  props: {
    /* startDate: {
      type: Date,
      default: null
    },
    endDate: {
      type: Date,
      default: null
    } */
  },
  mounted() {
    this._log(
      `${this.options.description} ➡️ ${this.options.pluginName} ➡️ ${this.options.homepage}`
    );
    if (this.canRender()) {
      // 开始渲染
      this.grayPage();
    }
  },
  updated() {},
  methods: {
    // 是否可以进行渲染
    canRender() {
      // 月+日 判断
      for (const i in this.options.mournDay) {
        let ele = this.options.mournDay[i];
        if (this.getMonthAndDate(new Date(ele)) == this.getMonthAndDate()) {
          return true;
        }
      }
      // 年+月+日 判断
      for (const i in this.options.date) {
        let ele = this.options.date[i];
        if (this.getDate(new Date(ele)) == this.getDate()) {
          return true;
        }
      }
      // 特殊的日期 判断
      for (const i in this.options.special) {
        let ele = this.options.special[i];
        if (ele.toLowerCase() == 'qinMing'.toLowerCase()) {
          // 清明节
          if (this.isQinMingJieDate()) {
            return true;
          }
        }
      }
      return false;
    },
    grayPage() {
      try {
        // 撤销置灰功能
        stopGray();
      } catch (ex) {
        console.error("stopGray error:" + ex.message);
      }
      // 将页面置灰
      gray(new Date().getTime() - 1, new Date().getTime() + 10000);
    },
    // 统一输出日志
    _log(str = this.options.pluginName) {
      // if (this.options.log) {
      console.log && console.log(str);
      // }
    },
    // 判断是否是闰年
    isLeapYear(year = new Date().getFullYear()) {
      if (((year % 4) == 0) && ((year % 100) != 0) || ((year % 400) == 0)) {
        return true;
      }
      return false;
    },
    // 判断当前是否是清明节
    isQinMingJieDate() {
      let date = new Date(),
        str = '';
      let fullYear = date.getFullYear();
      str += date.getMonth() + 1;
      str += date.getDate();
      //清明节的日期是不固定的，规律是：闰年开始的前2年是4月4日，闰年开始的第3年和第4年是4月5日
      if (this.isLeapYear(fullYear) || this.isLeapYear(fullYear - 1)) {
        return str == '44';
      } else {
        return str == '45';
      }
    },
    // 获取月日
    getMonthAndDate(date = new Date()) {
      let str = '';
      str += date.getMonth() + 1;
      str += date.getDate();
      return str;
    },
    // 获取年月日
    getDate(date = new Date()) {
      let str = '';
      str += date.getFullYear();
      str += date.getMonth() + 1;
      str += date.getDate();
      return str;
    }
  },
  computed: {
    options() {
      return JSON.parse ? JSON.parse(OPTIONS) : OPTIONS;
    }
  }
}
