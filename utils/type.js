/**
 *
 * @param {any} obj
 * @returns string
 */
export function getType(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1);
}

/**
 *
 * @param {any} obj
 * @param {string} type
 * @returns boolean
 */
export function isType(obj, type) {
    return getType(obj).toLowerCase() === type.toLowerCase();
}