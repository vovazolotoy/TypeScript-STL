
var STL = require('./node-module');

var stack = new STL.MaxHeap();

for (var i = 1; i < 11; i++) {
	stack.insert(Math.round(Math.random() * 100));
}

console.log(stack + '');
