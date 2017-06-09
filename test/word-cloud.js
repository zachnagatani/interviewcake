const expect = require('chai').expect,
      solution = require('../solutions/word-cloud').extractWordCloudData;

describe('Extract word cloud data', () => {
    it.only('should return a map containing each word and the number of times it exists in the input', () => {
        const result = solution('I didn\'t choose the taco life, the taco life chose me. Trust me, bro; it\'s true! Stu-pendous!');
        const wordMap = new Map();

        wordMap.set('i', 1);
        wordMap.set('didnt', 1);
        wordMap.set('choose', 1);
        wordMap.set('the', 2);
        wordMap.set('taco', 2);
        wordMap.set('life', 2);
        wordMap.set('chose', 1);
        wordMap.set('me', 2);
        wordMap.set('trust', 1);
        wordMap.set('bro', 1);
        wordMap.set('its', 1);
        wordMap.set('true', 1);
        wordMap.set('stupendous', 1);

        expect(result).to.deep.equal(wordMap);
    });
});