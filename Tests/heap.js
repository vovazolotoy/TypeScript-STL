
console.log('Testing: Heap');

/**
 * Heap tests
 * @type {Heap}
 */
var Heap = require('./../Datastructures/Heap.js');

// testing Heap
var heap = new Heap();
var heap2 = new Heap();
var heap3 = new Heap();

// Heap::insert
// Heap::toArray
assert(heap.insert(1) === undefined);
assert(JSON.stringify(heap.toArray()) === JSON.stringify([1]));
assert(heap.insert(2) === undefined);
assert(JSON.stringify(heap.toArray()) === JSON.stringify([2,1]));
assert(heap.insert(3) === undefined);
assert(JSON.stringify(heap.toArray()) === JSON.stringify([3,2,1]));
assert(heap.insert(4) === undefined);
assert(JSON.stringify(heap.toArray()) === JSON.stringify([4,3,2,1]));
assert(heap.insert(5) === undefined);
assert(JSON.stringify(heap.toArray()) === JSON.stringify([5,4,3,2,1]));
assert(heap.insert(10) === undefined);
assert(JSON.stringify(heap.toArray()) === JSON.stringify([10,5,4,3,2,1]));
assert(heap2.insert(3) === undefined);
assert(JSON.stringify(heap2.toArray()) === JSON.stringify([3]));
assert(heap2.insert(1) === undefined);
assert(JSON.stringify(heap2.toArray()) === JSON.stringify([3,1]));
assert(heap2.insert(2) === undefined);
assert(JSON.stringify(heap2.toArray()) === JSON.stringify([3,2,1]));
assert(heap2.insert(10) === undefined);
assert(JSON.stringify(heap2.toArray()) === JSON.stringify([10,3,2,1]));
assert(heap2.insert(0) === undefined);
assert(JSON.stringify(heap2.toArray()) === JSON.stringify([10,3,2,1,0]));
assert(heap2.insert(null) === undefined);
assert(JSON.stringify(heap2.toArray()) === JSON.stringify([10,3,2,1,0,null]));
assert(heap3.insert(11) === undefined);
assert(heap3.insert(3) === undefined);
assert(heap3.insert(4) === undefined);
assert(heap3.insert(5) === undefined);
assert(heap3.insert(8) === undefined);
assert(heap3.insert(2) === undefined);
assert(heap3.insert(7) === undefined);
assert(heap3.insert(1) === undefined);
assert(heap3.insert(17) === undefined);
assert(heap3.insert(70) === undefined);
assert(heap3.insert(69) === undefined);
assert(heap3.insert(71) === undefined);
assert(heap3.insert(6) === undefined);

// Heap::extract
assert(heap3.extract() === 71);
assert(heap3.extract() === 70);
assert(heap3.extract() === 69);
assert(heap3.extract() === 17);
assert(heap3.extract() === 11);
assert(heap3.extract() === 8);
assert(heap3.extract() === 7);
assert(heap3.extract() === 6);
assert(heap3.insert(6) === undefined);
assert(heap3.extract() === 6);
assert(heap3.extract() === 5);
assert(heap3.extract() === 4);
assert(heap3.extract() === 3);
assert(heap3.extract() === 2);
assert(heap3.extract() === 1);

/**
 compare
 count
 current
 isEmpty
 key
 next
 recoverFromCorruption
 toString
 rewind
 top
 valid
*/