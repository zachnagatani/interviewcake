/**
* Validates that all of a string's openers and closers ('{', '[', '(', '}', ']', ')') are properly nested
* @param {string} str - A string to validate
* @returns {boolean} true if validation succeeds, false if validation fails
*/
function tokenValidator(str) {
	let stack = [];
    const closers = {
    	'}': {
        	char: '}',
            opener: '{'
        },

        ']': {
        	char: ']',
            opener: '['
        },

        ')': {
        	char: '(',
            opener: ')'
        }
    };

    for (let i = 0; i < str.length; i++) {
    	if (str[i] === '{' || str[i] === '[' || str[i] === '(') {
        	stack.push(str[i]);
        } else if (str[i] === '}' || str[i] === ']' || str[i] === ')') {
        	if (stack.pop() !== closers[str[i]].opener) {
            	return false;
            }
        }
    }

    if (!stack.length) {
    	return true;
    }
}

module.exports = {
    tokenValidator
};
