/**
 *
 * @param {any} obj
 * @returns {string}
 */
export function getType(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1);
}

/**
 *
 * @param {any} obj
 * @param {string} type
 * @returns {boolean}
 */
export function isType(obj, type) {
    return getType(obj).toLowerCase() === type.toLowerCase();
}

/**
 * 对象浅比较
 * @param {Object} obj1
 * @param {Object} obj2
 */
export function isObjectEqual(obj1, obj2) {
    let result = true;
    for(let attr in obj1) {
        if (obj1.hasOwnProperty(attr) && obj1[attr] !== obj2[attr]) {
            result = false;
            break;
        }
    }
    return result;
}

/**
 * 统计数组中各类型的数量
 * @param {Array} ary
 * @requires {Object}
 */
export function countAryTypes(ary) {
    let obj = {};
    ary.forEach(item => {
        const type = getType(item);
        if (!obj[type]) {
            obj[type] = 1;
            return;
        }
        obj[type]++;
    });
    console.log(obj);
    return obj;
}

/**
 *
 * @param {Array} ary1
 * @param {Array} ary2
 * @returns {boolean}
 */
export function isArrayFamiliar(ary1, ary2) {
    if (ary1.length !== ary2.length) {
        return;
    }
    return isObjectEqual(countAryTypes(ary1), countAryTypes(ary2));
}