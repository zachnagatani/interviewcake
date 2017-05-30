const expect = require('chai').expect,
      solution = require('../solutions/bracket-validator').tokenValidator;

describe('Bracket validator', () => {
    it('should return true if openers/closers are nested properly "{[]()}"', () => {
        expect(solution('{[]()}')).to.be.true;
    });

    it('should return false if inputs are nested improperly"', () => {
        expect(solution('{[(])}')).to.be.false;
        expect(solution('{[}')).to.be.false;
    });

    it('should handle strings with other characters', () => {
        expect(solution('function helloWorld(){ return []; };')).to.be.true;
        expect(solution('function helloWorld({)};')).to.be.false;
    });

    it('should return false if an opener is missing a closer, even if nesting is correct', () => {
        expect(solution('function helloWorld(){ return [];;')).to.be.false;
    });
});