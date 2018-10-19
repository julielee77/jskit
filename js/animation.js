/**
 * @file animation
 * @author lihaizhu
 */

/**
 * getComputedStyle兼容
 *
 * @param {Object} ele DOM element
 * @param {string} attr attribute
 * @returns {number}
 */
function getStyle(ele, attr) {
    if (ele.currentStyle) {
        //IE
        if (attr == 'opacity') {
            return parseFloat(ele.currentStyle.filter.match(/^d+/) / 100); //=>0.3 format
        }
        return parseInt(ele.currentStyle[attr], 10);
    }
    //现代浏览器
    return parseInt(getComputedStyle(ele, null)[attr], 10);
}
/**
 * js animation 类似于jQuery的 animation
 * 
 * @param ele--- DOMElement
 * @param json -- 动画属性数据，如{"width":"300px"}
 * @param fn -- callback function
 */
export function changeAttr(ele, json, fn) {
    clearInterval(ele.timer);

    ele.timer = setInterval(() => {
        //动画停止标志，当全部属性到达最终值时停止
        let bStop = true;
        for (let attr in json) {
            let curAttr = getStyle(ele, attr);
            const value = json[attr];
            let speed = 0;
            if (attr == 'opacity') {
                if (Math.abs(value - curAttr) <= 0.05) {
                    curAttr = value;
                } else {
                    speed = parseInt(parseFloat(value - curAttr) * 100 / 10);
                }
                ele.style[attr] = curAttr + speed / 100;
                ele.style.filter = `alpha(opacity=${curAttr * 100}${speed})`;
            } else {
                if (Math.abs(value - curAttr) <= 10) {
                    curAttr = value;
                } else {
                    speed = parseInt((value - curAttr) / 5, 10);
                }
                ele.style[attr] = `${curAttr}${speed}px`;
            }
            if (value - curAttr) {
                bStop = false;
            }
        }
        if (bStop) {
            clearInterval(ele.timer);
            fn && fn();
        }
    }, 100);
}
