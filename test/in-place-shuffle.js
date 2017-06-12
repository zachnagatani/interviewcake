const expect = require('chai').expect,
      solution = require('../solutions/in-place-shuffle').inPlaceShuffle;

describe('In place shuffle', () => {

    it.only('should returned a shuffled version of the input array', () => {
        const result = solution([1, 2, 3, 4]);
        expect(result).to.not.deep.equal([1, 2, 3, 4]);
    });
});