/*animation*/
function getStyle(ele, attr) {
  if (ele.currentStyle) { //IE
    if (attr == 'opacity') {
      return ele.currentStyle.filter.match(/^d+/) / 100; //=>0.3 format
    }
    return ele.currentStyle[attr];
  } else { //现代浏览器
    return getComputedStyle(ele, null)[attr];
  }
}
/*ele--- DOMElement
 **json -- 动画属性数据，如{"width":"300px"}
 **fn -- callback function
 */
function changeAttr(ele, json, fn) {
  clearInterval(ele.timer);
  ele.timer = setInterval(function() {
    var bStop = true; //动画停止标志，当全部属性到达最终值时停止
    for (var attr in json) {
      var curAttr = getStyle(ele, attr);
      curAttr = attr == 'opacity' ? parseFloat(curAttr) : parseInt(curAttr);
      var value = json[attr];
      var speed = 0;
      if (attr == 'opacity') {
        if (Math.abs(value - curAttr) <= 0.05) {
          curAttr = value;
        } else {
          speed = parseInt(parseFloat(value - curAttr) * 100 / 10);
        }
        ele.style[attr] = curAttr + speed / 100;
        ele.style.filter = 'alpha(opacity=' + curAttr * 100 + speed + ')';
      } else {
        if (Math.abs(value - curAttr) <= 10) {
          curAttr = value;
        } else {
          speed = parseInt((value - curAttr) / 5);
        }
        ele.style[attr] = curAttr + speed + 'px';
      }
      if (value - curAttr) {
        bStop = false;
      }
    }
    if (bStop) {
      clearInterval(ele.timer);
      if (fn) {
        fn();
      }
    }
  }, 100);
}