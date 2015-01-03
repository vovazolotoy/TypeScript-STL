
console.log('Testing: MaxHeap');

/**
 * MaxHeap tests
 * @type {MaxHeap}
 */
var MaxHeap = require('./../Datastructures/MaxHeap.js');

// testing MaxHeap
var heap = new MaxHeap();

// MaxHeap::insert
// MaxHeap::toArray
assert(heap.insert(1) === undefined);
assert(JSON.stringify(heap.toArray()) === JSON.stringify([1]));
assert(heap.insert(2) === undefined);
assert(JSON.stringify(heap.toArray()) === JSON.stringify([2, 1]));
assert(heap.insert(3) === undefined);
assert(JSON.stringify(heap.toArray()) === JSON.stringify([3, 2, 1]));
assert(heap.insert(4) === undefined);
assert(JSON.stringify(heap.toArray()) === JSON.stringify([4, 3, 2, 1]));
assert(heap.insert(5) === undefined);
assert(JSON.stringify(heap.toArray()) === JSON.stringify([5, 4, 3, 2, 1]));
assert(heap.insert(10) === undefined);
assert(JSON.stringify(heap.toArray()) === JSON.stringify([10, 5, 4, 3, 2, 1]));
assert(heap.insert(1000) === undefined);
assert(JSON.stringify(heap.toArray()) === JSON.stringify([1000, 10, 5, 4, 3, 2, 1]));
assert(heap.insert(90) === undefined);
assert(JSON.stringify(heap.toArray()) === JSON.stringify([1000, 90, 10, 5, 4, 3, 2, 1]));
assert(heap.insert(7) === undefined);
assert(JSON.stringify(heap.toArray()) === JSON.stringify([1000, 90, 10, 7, 5, 4, 3, 2, 1]));

// MaxHeap::extract
assert(heap.extract() === 1000);
assert(heap.extract() === 90);
assert(heap.extract() === 10);
assert(heap.extract() === 7);
assert(heap.extract() === 5);
assert(heap.extract() === 4);
assert(heap.extract() === 3);
assert(heap.extract() === 2);
assert(heap.extract() === 1);
/*
 */
