const expect = require('chai').expect,
      solution = require('../solutions/recursive-string-permutation').findPermutations;

describe('Find permutation', () => {
    it.only('should find all of the permutations for a given string', () => {
        expect(solution('tom')).to.deep.equal(['tom', 'tmo', 'otm', 'omt', 'mot', 'mto']);
    });
});