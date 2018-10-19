/**
 * @file sort functions
 * @author lihaizhu
 */
/**
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

//insert sorting
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
//random sorting
export function shuffle(ary, n) {
    var len = ary.length,
        num = n ? Math.min(n, len) : len,
        arr = ary.slice(0);
    arr.sort(function(a, b) {
        return Math.random() - 0.5;
    });
    return arr.slice(0, num);
}
