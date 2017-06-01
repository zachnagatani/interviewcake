const expect = require('chai').expect,
      solution = require('../solutions/walmart').getDataRangeFromServer;

describe('getDataRangeFromServer', () => {
    it.only('should the proper data range from the server', () => {
        solution(0, 1)
            .then(dataRange => {
                const expectedVal = [0, 1];
                expect(dataRange).to.deep.equal(expectedVal);
            });

        solution(0, 49)
            .then(dataRange => {
                const expectedVal = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49];
                expect(dataRange).to.deep.equal(expectedVal);
            });

        solution(5, 51)
            .then(dataRange => {
                const expectedVal = [5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51];
                expect(dataRange).to.deep.equal(expectedVal);
            });

        solution(50, 99)
            .then(dataRange => {
                const expectedVal = [50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99];
                expect(dataRange).to.deep.equal(expectedVal);
            });

        solution(55, 99)
            .then(dataRange => {
                const expectedVal = [55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99];
                expect(dataRange).to.deep.equal(expectedVal);
            });

        solution(0,1)
            .then(dataRange => {
                console.log(dataRange);
            });
    });
});