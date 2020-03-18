/**
 * @file sort functions
 * @author Julie
 *
 * sorting algorithm
 * 1. bubble sorting
 * 2. insertion sorting
 * 3. random sorting
 */

/**
 * bubble sorting n*n
 *
 * @export
 * @param {array} ary
 * @returns {array}
 */
export function bubbleSort(ary) {
    const len = ary.length;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            //循环i之后的元素，若小于i元素则与其交换位置
            if (ary[j] < ary[i]) {
                const temp = ary[i];
                ary[i] = ary[j];
                ary[j] = temp;
            }
        }
    }
    return ary;
}

/**
 * insert sorting n*n
 *
 * @export
 * @param {array} ary
 * @returns {array}
 */
export function insertSort(ary) {
    const len = ary.length;
    for (let i = 0; i < len; i++) {
        if (ary[i - 1] > ary[i]) {
            const temp = ary[i];
            for (let j = i; j > 0 && ary[j - 1] > temp; j--) {
                ary[j] = ary[j - 1];
            }
            ary[j] = temp;
        }
    }
    return ary;
}

/**
 * random sorting TODO:验证原理
 *
 * @param {Array} ary
 * @param {number} n
 * @returns {Array}
 */
export function shuffleSort(ary, n) {
    const len = ary.length;
    const num = n ? Math.min(n, len) : len;
    const newAry = ary.slice(0);
    newAry.sort(() => Math.random() - 0.5);
    return newAry.slice(0, num);
}
