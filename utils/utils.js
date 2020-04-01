/**
 * @file functions
 * @author Julie
 */

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
 *
 * @param {number} number
 * @param {number} hexNumber
 */
export function convertHex(number, hexNumber) {

}
