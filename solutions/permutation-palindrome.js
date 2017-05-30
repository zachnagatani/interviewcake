/**
 * Checks if any permutation of an input string is a palindrome (the same forwards and backwards)
 * @param str - The input string to be checked
 * @returns True if a palindrome is found, false if not
 */
function permutationPalindrome(str) {
    var permutations = getAllPermutations(str);
    return checkForPalindromes(permutations);
}

/**
 * A non-mutative swap of two elements in an array
 * @param {array} arr - The array from which to base the swap
 * @param {number} a - The index of the first element to swap
 * @param {number} b - The index of the second element to swap
 * @returns {array} swappedArr - A new array with the elements swapped
 */
function pureSwap(arr, a, b) {
    let swappedArr = arr.slice();
    const temp = swappedArr[a];

    swappedArr[a] = swappedArr[b];
    swappedArr[b] = temp;

    return swappedArr;
};

/**
 * Populates an array with all the permutations of a string
 * @param {string} str - The input string for which to find all permutations
 * @returns {string[]} Returns an array of permutations of the input string
 */
function getAllPermutations(str) {
    let permutations = [],
        strArr = str.split('');

    for (let i = 0; i < strArr.length; i++) {
        let newBaseStrArr = pureSwap(strArr, i, 0);
        permutations.push(newBaseStrArr.join(''));

        for (let j = 1; j < newBaseStrArr.length - 1; j++) {
            permutations.push(pureSwap(newBaseStrArr, j, j + 1).join(''));
        }
    }

    return permutations.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
}


/**
 * Checks an input array of permutations of the same word to see if any is a palindrome
 * @param {str[]} permutations - An array of permutations to check
 * @returns {boolean} Returns true if a palindrome is found, false if not
 */
function checkForPalindromes(permutations) {
    for (let k = 0; k < permutations.length; k++) {
        if (permutations[k].split('').reverse().join('') === permutations[k]) {
            return true;
        }
    }

    return false;
}

/**
 * Another solution for Permutation Palindromes. Tracks character repetition instead of having to loop through each palindrome.
 * Still not as efficient as could be.
 * Checks if any permutation of an input string is a palindrome (the same forwards and backwards)
 * @param str - The input string to be checked
 * @returns True if a palindrome is found, false if not
 */
function permutationPalindrome2(str) {
    let strArr = str.split(''),
        head = 0,
        tail = strArr.length - 1,
        tracker = {};

    while (head < tail) {
        let headVal = strArr[head],
            tailVal = strArr[tail];

        if (!tracker[headVal]) {
            tracker[headVal] = 1;
        } else {
            tracker[headVal]++;
        }

        if (!tracker[tailVal]) {
            tracker[tailVal] = 1;
        } else {
            tracker[tailVal]++;
        }

        head++;
        tail--;
    }

    if (head === tail) {
        let headVal = strArr[head];

        if (!tracker[headVal]) {
            tracker[headVal] = 1;
        } else {
            tracker[headVal]++;
        }
    }

    let oddTracker = 0;

    for (var char in tracker) {
        if (tracker[char] % 2 !== 0) {
            oddTracker++;
        }
    }

    switch (strArr.length % 2 === 0) {
        case true:
            return !oddTracker ? true : false;
        case false:
            return oddTracker === 1 ? true : false;
    }
}

module.exports = {
    permutationPalindrome,
    permutationPalindrome2
};
