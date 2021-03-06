const expect = require('chai').expect,
      solution = require('../solutions/queue-two-stacks').Queue;

describe('Queue two stacks', () => {

    it('should enqueue properly', () => {
        const queue = new solution();
        expect(queue.enqueue(1)).to.equal(1);
    });

    it('should dequeue properly', () => {
        const queue = new solution();
        queue.enqueue(1);
        expect(queue.dequeue()).to.equal(1);
    });

    it('should be first-in-first-out', () => {
        const queue = new solution();
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.dequeue()).to.equal(1);
    });
});