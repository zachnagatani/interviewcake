/**
 * Recursively finds all of the permutations of a given string
 * @param {string} str - The input string from which to find its permutations
 * @returns {string[]} permutations - An array containing all permutations of str
 */
function findPermutations(str) {
    const swap = (arr, a, b) => {
        const temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;

        return arr;
    },
        strArr = str.split('');

    if (strArr.length === 1) {
        return str;
    }

    // for (let i = 1; i < str.length; i++) {
    //     swap(str, i, i + 1);
    // }

    for (let i = 0; i < strArr.length; i++) {
        swap(strArr, i, i + 1);
        return findPermutations(strArr.slice(1).join(''));
    }
}

module.exports = {
    findPermutations
};