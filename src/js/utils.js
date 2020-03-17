/**
 * @file functions
 * @author lihaizhu
 */

/**
 * identify data type
 *
 * @param {any} val
 * @returns {boolean}
 */
function identifyType(val) {
    if (!val) {
        return;
    }
    var type = typeof val;
    //string,boolean,number,undefined,function
    if (type !== 'object') {
        return type;
    }
    //object type, such as [object Array]
    return Object.prototype.toString.call(val).slice(8, -1);
}

/**
 * validate identification card number
 *
 * @export
 * @param {string} id
 * @returns {boolean}
 */
export function validateCard(id) {
    id += '';
    const ary = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    let sum = 0;
    for (let i = 0; i < ary.length; i++) {
        sum += arr[i] * parseInt(id.charAt(i)); //product for the matrix
    }
    const remainder = Math.abs(sum % 11 - 2);
    const last = remainder === 0 ? 'X' : remainder; //0--X
    return last == id.charAt(17).toUpperCase();
}

/**
 * likes jQuery, when DOM is ready
 *
 * @export
 * @param {*} fn
 */
export function domReady(fn) {
    // latest browsers
    if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', fn, false);
    } else {
        IEContentLoaded(fn);
    }
    // IE simulates  DOMContentLoaded
    function IEContentLoaded(fn) {
        const d = document;
        let done = false;
        // when done execute next
        function init() {
            if (!done) {
                done = true;
                fn();
            }
        }
        // execute hack immediately
        (() => {
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
        d.onreadystatechange = () => {
            // if the function is bind after domReady, execute it immediately
            if (d.readyState === 'complete') {
                d.onreadystatechange = null;
                init();
            }
        };
    }
}
