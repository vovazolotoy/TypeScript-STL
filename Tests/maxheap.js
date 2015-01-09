
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
// MaxHeap::count
assert(heap.count() === 9);
assert(heap.extract() === 1000);
assert(heap.extract() === 90);
assert(heap.extract() === 10);
assert(heap.extract() === 7);
assert(heap.count() === 5);
assert(heap.extract() === 5);
assert(heap.extract() === 4);
assert(heap.extract() === 3);
assert(heap.count() === 2);
assert(heap.extract() === 2);
assert(heap.extract() === 1);
assert(heap.count() === 0);
assert(heap.count() === 0);
assert(heap.insert(123131232) === undefined);
assert(heap.insert(32313151232) === undefined);
assert(heap.insert(2231311232) === undefined);
assert(heap.insert(1231311232) === undefined);
assert(heap.insert(5231131232) === undefined);
assert(heap.insert(1) === undefined);
assert(heap.insert(10) === undefined);
assert(heap.insert(100) === undefined);
assert(heap.insert(1000) === undefined);
assert(heap.insert(10000) === undefined);
assert(heap.insert(100000) === undefined);
assert(heap.insert(12113131232) === undefined);
assert(heap.count() === 12);

/*
 compare
 insert
 isEmpty
 recoverFromCorruption
 toString

 key
 next
 valid
 current
 rewind
 top
*/
