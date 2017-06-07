function Queue() {
    this.stack1 = [];
    this.stack2 = [];
}

Queue.prototype.enqueue = function(item) {
    return this.stack1.push(item);
};

Queue.prototype.dequeue = function() {
    if (!this.stack2.length) {
        if(!this.stack1.length) {
            return null;
        }

        while(this.stack1.length) {
            this.stack2.push(this.stack1.pop());
        }
    }

    return this.stack2.pop();
}

module.exports = {
    Queue
};