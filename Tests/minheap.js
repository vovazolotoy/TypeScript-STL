
console.log('Testing: MinHeap');

/**
 * MinHeap tests
 * @type {MinHeap}
 */
var MinHeap = require('./../Datastructures/MinHeap.js');

// testing MinHeap
var heap = new MinHeap();

// MinHeap::insert
// MinHeap::toArray
// MinHeap::count
assert(heap.count() === 0);
assert(heap.insert(1) === undefined);
assert(JSON.stringify(heap.toArray()) === JSON.stringify([1]));
assert(heap.insert(2) === undefined);
assert(JSON.stringify(heap.toArray()) === JSON.stringify([1, 2]));
assert(heap.insert(3) === undefined);
assert(JSON.stringify(heap.toArray()) === JSON.stringify([1, 2, 3]));
assert(heap.insert(4) === undefined);
assert(JSON.stringify(heap.toArray()) === JSON.stringify([1, 2, 3, 4]));
assert(heap.insert(5) === undefined);
assert(JSON.stringify(heap.toArray()) === JSON.stringify([1, 2, 3, 4, 5]));
assert(heap.count() === 5);
assert(heap.insert(10) === undefined);
assert(JSON.stringify(heap.toArray()) === JSON.stringify([1, 2, 3, 4, 5, 10]));
assert(heap.insert(1000) === undefined);
assert(JSON.stringify(heap.toArray()) === JSON.stringify([1, 2, 3, 4, 5, 10, 1000]));
assert(heap.insert(90) === undefined);
assert(JSON.stringify(heap.toArray()) === JSON.stringify([1, 2, 3, 4, 5, 10, 90, 1000]));
assert(heap.insert(7) === undefined);
assert(JSON.stringify(heap.toArray()) === JSON.stringify([1, 2, 3, 4, 5, 7, 10, 90, 1000]));

// MinHeap::extract
// MinHeap::count
assert(heap.count() === 9);
assert(heap.extract() === 1);
assert(heap.count() === 8);
assert(heap.count() === 8);
assert(heap.extract() === 2);
assert(heap.extract() === 3);
assert(heap.extract() === 4);
assert(heap.extract() === 5);
assert(heap.extract() === 7);
assert(heap.extract() === 10);
assert(heap.extract() === 90);
assert(heap.extract() === 1000);
assert(heap.count() === 0);

/*
 compare
 count
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
