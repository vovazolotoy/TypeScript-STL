var Heap = require('./Datastructures/Heap.js');

var heap = new Heap();

heap.insert(5);
heap.insert(17);
heap.insert(1);
heap.insert(11);

console.log('Heap:\n' + heap);