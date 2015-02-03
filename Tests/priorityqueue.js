
console.log('Testing: PriorityQueue');

/**
 * PriorityQueue tests
 * @type {PriorityQueue}
 */
var PriorityQueue = require('./../Datastructures/PriorityQueue.js');

// testing PriorityQueue
var queue = new PriorityQueue();

queue.enqueue('C', 0.000001);
queue.enqueue('C2', 2);
queue.enqueue('C3', 3);
queue.enqueue('C1', 1);
queue.enqueue('Cmin', 0.01);
queue.enqueue('C4', 0.1);
assert(queue.dequeue() === 'C3');
assert(queue.dequeue() === 'C2');
assert(queue.dequeue() === 'C1');
assert(queue.dequeue() === 'C4');
assert(queue.dequeue() === 'Cmin');
assert(queue.dequeue() === 'C');
