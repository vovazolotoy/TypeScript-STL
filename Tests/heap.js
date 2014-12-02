
console.log('Testing: Heap');

/**
 * Heap tests
 * @type {Heap}
 */
var Heap = require('./../Datastructures/Heap.js');

// testing Heap
var heap = new Heap();
var heap2 = new Heap();

// Heap::insert
assert(heap.insert(1) === undefined);
assert(heap.insert(2) === undefined);
assert(heap.insert(3) === undefined);
assert(heap.insert(4) === undefined);
assert(heap.insert(5) === undefined);
assert(heap.insert(10) === undefined);

/*
 compare
 count
 current
 extract
 isEmpty
 key
 next
 recoverFromCorruption
 rewind
 top
 toString
 valid
 */
