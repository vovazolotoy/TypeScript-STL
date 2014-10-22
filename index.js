
var stl = require('./node-module');

var heap = new stl.Heap();

for (var i = 1; i < 10; i++) {
	heap.insert(Math.round(Math.random() * 100));
}

console.log(heap + '');
