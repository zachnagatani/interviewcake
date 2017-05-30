const expect = require('chai').expect,
      solution = require('../solutions/permutation-palindrome').permutationPalindrome;

describe('Permutation palindrome checker', () => {
    it.only('should return true if any permutation of a string is a palindrome', () => {
        expect(solution('civic')).to.be.true;
        expect(solution('ivicc')).to.be.true;
        expect(solution('mom')).to.be.true;
        expect(solution('omm')).to.be.true;
    });

    it.only('should return false if no permutation of a string is a palindrome', () => {
        expect(solution('civil')).to.be.false;
        expect(solution('livci')).to.be.false;
        expect(solution('tom')).to.be.false;
    });
});