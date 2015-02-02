
console.log('Testing: PriorityQueue');

/**
 * PriorityQueue tests
 * @type {PriorityQueue}
 */
var PriorityQueue = require('./../Datastructures/PriorityQueue.js');

// testing PriorityQueue
var queue = new PriorityQueue();

queue.enqueue('C3', 3);
queue.enqueue('C2', 2);
queue.enqueue('C', 1);
queue.enqueue('C4', 0.1);
queue.enqueue('C', 0.01);
queue.enqueue('C', 0.000001);
console.log(queue + "");
//console.log(queue.dequeue());
//console.log(queue.dequeue());
//console.log(queue.dequeue());
//console.log(queue.dequeue());
//console.log(queue.dequeue());
//console.log(queue.dequeue());
assert(queue.dequeue() === 'C3');
assert(queue.dequeue() === 'C2');
//assert(queue.dequeue() === 'C');
//assert(queue.dequeue() === 'C4');
console.log(queue + "");
