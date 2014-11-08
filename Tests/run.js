
console.log('Testing...');

/**
 * Base asserting
 *
 * @param condition
 * @param message
 */
function assert(condition, message) {
	if (!condition) {
		throw message || "Assertion failed";
	}
}

DoublyLinkedList = require('./../Datastructures/DoublyLinkedList.js');
Stack = require('./../Datastructures/Stack.js');
Queue = require('./../Datastructures/Queue.js');

var stack = new Stack();
var stack2 = new Stack();

assert(JSON.stringify(stack.toArray()) === JSON.stringify([]));
assert(JSON.stringify(stack.toArray()) === JSON.stringify(stack2.toArray()));
assert(JSON.stringify(stack) === JSON.stringify(stack2));
assert(JSON.stringify(stack.toArray()) !== JSON.stringify([1]));
