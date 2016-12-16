/*判断数据类型*/
function identifyType(val) {
  if (!val) {
    return;
  }
  var type = typeof val;
  //非object类型 string,boolean,number,undefined,function
  if (type !== 'object') {
    return type;
  }
  //object类型使用prototype判断，如[object Array]
  return Object.prototype.toString.call(val).slice(8, -1);
}
/*验证身份证最后一位 TODO ??*/
function identifiyCard(id) {
  id += '';
  var arr = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
    sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += (arr[i] * parseInt(id.charAt(i))); //各个位置乘积的和
  }
  var remainder = Math.abs(sum % 11 - 2); //和对11取余减2
  var last = (remainder === 0 ? 'X' : remainder); //0--X
  return last == id.charAt(17).toUpperCase();
}
//原生js实现ajax  同源
var XMLHttp = function() {
  var xhr;
  if (window.XMLHttPRequest) { //现代浏览器
    xhr = new XMLHttPRequest();
  } else if (window.ActiveXObject) { //IE6-
    xhr = new ActiveXObject();
  }
  if (xhr === undefined || xhr === null) { //其它不支持情况报错
    throw new Error('创建AMLHttpRequest对象失败');
  } else {
    return xhr;
  }
};
XMLHttp.prototype.send = function(url, method, async, data, fn) {
  var params = null;
  if (method.toUpperCase() === 'GET') {
    //GET方法需处理传递参数
    if (data !== undefined || data !== null) {
      url += '?' + parseData(data);
    }
  } else {
    params = JSON.stringify(data);
    //POST方法设置请求头
    this.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  }
  //建立连接
  this.open(url, method, async);
  //发送请求及其数据
  this.send(params);
  //监听XMLHttpRequest对象的状态
  this.onreadystatechange = function() {
    //当请求完成，且状态为200 OK时，接收数据并处理
    if (this.readyState == 4 && this.status == 200) {
      fn(this.responseText);
    }
  };
  /*parse data
   ** data 可能为string或object
   */
  function parseData(data) {
    if (data === undefined || data === null) {
      return;
    }
    if (typeof data == 'string') {
      return data;
    }
    var str = '';
    for (var attr in data) {
      if (data.hasOwnProperty(attr)) {
        str += attr + '=' + data[attr] + '&';
      }
    }
    str = str.slice(0, -1);
    return str;
  }
};
//DOM的ready实现，类似jQuery
function domReady(fn) {
  //现代浏览器
  if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fn, false);
  } else {
    IEContentLoaded(fn);
  }
  //IE模拟DOMContentLoaded
  function IEContentLoaded(fn) {
    var d = document,
      done = false;
    //执行一次用户回调函数init()
    function init() {
      if (!done) {
        done = true;
        fn();
      }
    }
    //立即执行hack
    (function() {
      try {
        d.documentElement.doScroll('left');
      } catch (e) {
        //延迟再试一次
        setTimeout(arguments.callee, 50);
        return;
      }
      //直到没有错误
      init();
    })();
    //监听document的加载状态
    d.onreadystatechange = function() {
      //如果用户是在domReady之后绑定的函数，就立马执行
      if (d.readyState == 'complete') {
        d.onreadystatechange = null;
        init();
      }
    };
  }
}