const expect = require('chai').expect,
      solution = require('../solutions/permutation-palindrome').permutationPalindrome;
      solution2 = require('../solutions/permutation-palindrome').permutationPalindrome2;

describe('Permutation palindrome checker', () => {
    it('should return true if any permutation of a string is a palindrome', () => {
        expect(solution('civic')).to.be.true;
        expect(solution('ivicc')).to.be.true;
        expect(solution('mom')).to.be.true;
        expect(solution('omm')).to.be.true;

        expect(solution2('civic')).to.be.true;
        expect(solution2('ivicc')).to.be.true;
        expect(solution2('mom')).to.be.true;
        expect(solution2('omm')).to.be.true;
    });

    it('should return false if no permutation of a string is a palindrome', () => {
        expect(solution('civil')).to.be.false;
        expect(solution('livci')).to.be.false;
        expect(solution('tom')).to.be.false;

        expect(solution2('civil')).to.be.false;
        expect(solution2('livci')).to.be.false;
        expect(solution2('tom')).to.be.false;
    });
});