const expect = require('chai').expect,
      solution = require('../solutions/top-scores').sortTopScores;

describe('Top scores', () => {

    it.only('should return a sorted array of scores', () => {
        const result = solution([37, 89, 41, 65, 91, 53], 100);
        expect(result).to.deep.equal([37, 41, 53, 65, 89, 91]);

        const result1 = solution([37, 37, 89, 41, 41, 65, 65, 91, 53], 100);
        expect(result1).to.deep.equal([37, 37, 41, 41, 53, 65, 65, 89, 91]);
    });
});