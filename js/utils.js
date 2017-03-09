/* identify data type */
function identifyType(val) {
  if (!val) {
    return;
  }
  var type = typeof val;
  //string,boolean,number,undefined,function
  if (type !== 'object') {
    return type;
  }
  //obejct type, such as [object Array]
  return Object.prototype.toString.call(val).slice(8, -1);
}

/* validate identification card number */
//  TODO ??
function validateCard(id) {
  id += '';
  var arr = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
    sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += (arr[i] * parseInt(id.charAt(i))); //produt for the matrix
  }
  var remainder = Math.abs(sum % 11 - 2); 
  var last = (remainder === 0 ? 'X' : remainder); //0--X
  return last == id.charAt(17).toUpperCase();
}

/* ajax completemented by native javascript  */  
// Homologous
var XMLHttp = function() {
  var xhr;
  if (window.XMLHttPRequest) { //
    xhr = new XMLHttPRequest();
  } else if (window.ActiveXObject) { //IE6-
    xhr = new ActiveXObject();
  }
  if (xhr === undefined || xhr === null) { 
    throw new Error('creating XMLHttpRequest Object failed');
  } else {
    return xhr;
  }
};
XMLHttp.prototype.send = function(url, method, async, data, fn) {
  var params = null;
  if (method.toUpperCase() === 'GET') {
    // parse parameters for GET method
    if (data !== undefined || data !== null) {
      url += '?' + parseData(data);
    }
  } else {
    params = JSON.stringify(data);
    // set header for POST method
    this.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  }
  // 1. open connection
  this.open(url, method, async);
  // 2. send request and data
  this.send(params);
  // 3. listen the status of XMLHttpRequest Object
  this.onreadystatechange = function() {
    // 4. when request is completed and the status equals 200, handle reponse data
    if (this.readyState == 4 && this.status == 200) {
      fn(this.responseText);
    }
  };
  /* parse data
   ** string/Object : data
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

// likes jQuery, when DOM is ready
function domReady(fn) {
  // latest browsers
  if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fn, false);
  } else {
    IEContentLoaded(fn);
  }
  // IE imutates DOMContentLoaded
  function IEContentLoaded(fn) {
    var d = document,
      done = false;
    // when doned execute next 
    function init() {
      if (!done) {
        done = true;
        fn();
      }
    }
    // execute hack immediately
    (function() {
      try {
        d.documentElement.doScroll('left');
      } catch (e) {
        // delay to try again
        setTimeout(arguments.callee, 50);
        return;
      }
      init();
    })();
    // listen loading status of document
    d.onreadystatechange = function() {
      // if the function is bind after domReady, execute it immediately
      if (d.readyState == 'complete') {
        d.onreadystatechange = null;
        init();
      }
    };
  }
}