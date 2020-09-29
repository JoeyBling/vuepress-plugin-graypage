// 页面变灰库

let styleEl = null;

/**
 * 将页面置灰
 * @param {*} start 开始时间
 * @param {*} end 结束时间
 * @param {*} serverTime 如果为空，那么自动用浏览器当前时间计算。系统时间在开始和结束时间之间的时候执行置灰操作
 */
export function gray(start /** 2020/04/03 20:31:00 */ , end /** 2020/04/04 24:00:00 */ ,
  serverTime = (new Date().getTime()) /** default is the current browser time */
) {
  let _s = new Date(serverTime).getTime();
  if (new Date(start).getTime() < _s && new Date(end).getTime() > _s) {
    styleEl = document.createElement('style');
    styleEl.id = 'graypage';
    styleEl.innerText =
      `html{
        filter: grayscale(100%);
        -webkit-filter: grayscale(100%);
        -moz-filter: grayscale(100%);
        -ms-filter: grayscale(100%);
        -o-filter: grayscale(100%);
        filter: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale");
        filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
        -webkit-filter: grayscale(1);
      }`;

    let head = document.getElementsByTagName('head')[0];
    head.appendChild(styleEl);
  }
}

/**
 * 撤销置灰功能
 */
export function stopGray() {
  if (styleEl) {
    styleEl.parentNode.removeChild(styleEl);
  } else {
    let el = document.getElementById('graypage');
    el && el.parentNode.removeChild(el);
  }
}
