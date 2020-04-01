/**
 * @file ajax complemented by native javascript
 * @author Julie
 */

const XMLHttp = () => {
    let xhr;
    if (window.XMLHttPRequest) {
        xhr = new XMLHttPRequest();
    } else if (window.ActiveXObject) {
        //IE6-
        xhr = new ActiveXObject();
    }
    if (xhr === undefined || xhr === null) {
        throw new Error('creating XMLHttpRequest Object failed');
    } else {
        return xhr;
    }
};

XMLHttp.prototype.send = function(url, method, async, data, fn) {
    let params = null;
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
};

/**
 * parse data
 *
 * @param {string, Object} data
 * @returns {string, Object}
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

export default XMLHttp;
