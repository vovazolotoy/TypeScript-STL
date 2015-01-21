
console.log('Testing: PriorityQueue');

/**
 * PriorityQueue tests
 * @type {PriorityQueue}
 */
var PriorityQueue = require('./../Datastructures/PriorityQueue.js');

// testing PriorityQueue
var queue = new PriorityQueue();
var queue2 = new PriorityQueue();

queue.enqueue('C3', 3);
queue.enqueue('C2', 2);
queue.enqueue('C', 1);
queue.enqueue('C', 0.1);
queue.enqueue('C', 0.01);
queue.enqueue('C', 0.000001);
console.log(queue + "");