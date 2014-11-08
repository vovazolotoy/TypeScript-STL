
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

/**
 * DoublyLinkedList tests
 * @type {DoublyLinkedList}
 */
var DoublyLinkedList = require('./../Datastructures/DoublyLinkedList.js');

// testing lists
var list = new DoublyLinkedList();
var list2 = new DoublyLinkedList();
var list3 = new DoublyLinkedList();
var list4 = new DoublyLinkedList();

// DoublyLinkedList::push
// DoublyLinkedList::toArray
assert(list.push(1) === undefined);
assert(JSON.stringify(list.toArray()) === JSON.stringify([1]));
assert(list.push(2) === undefined);
assert(JSON.stringify(list.toArray()) === JSON.stringify([1, 2]));
assert(list.push(3) === undefined);
assert(JSON.stringify(list.toArray()) === JSON.stringify([1, 2, 3]));
assert(list.push(4) === undefined);
assert(JSON.stringify(list.toArray()) === JSON.stringify([1, 2, 3, 4]));
assert(list2.push() === undefined);
assert(JSON.stringify(list2.toArray()) === JSON.stringify([undefined]));
assert(list2.push(null) === undefined);
assert(JSON.stringify(list2.toArray()) === JSON.stringify([undefined, null]));
assert(list2.push(false) === undefined);
assert(JSON.stringify(list2.toArray()) === JSON.stringify([undefined, null, false]));
assert(list3.push(100000000) === undefined);

// DoublyLinkedList::count
assert(list.count() === 4);
assert(list2.count() === 3);
assert(list3.count() === 1);
assert(list4.count() === 0);

// DoublyLinkedList::isEmpty
assert(list.isEmpty() === false);
assert(list2.isEmpty() === false);
assert(list3.isEmpty() === false);
assert(list4.isEmpty() === true);

// DoublyLinkedList::top
assert(list.top() === 4);
assert(list2.top() === false);
assert(list3.top() === 100000000);
assert(list4.top() === undefined);

// DoublyLinkedList::bottom
assert(list.bottom() === 1);
assert(list2.bottom() === undefined);
assert(list3.bottom() === 100000000);
assert(list4.bottom() === undefined);

// DoublyLinkedList::toString
assert(list.toString() === "{1->2->3->4}");
assert(list2.toString() === "{->->false}");
assert(list3.toString() === "{100000000}");
assert(list4.toString() === "{}");



Stack = require('./../Datastructures/Stack.js');
Queue = require('./../Datastructures/Queue.js');

var stack = new Stack();
var stack2 = new Stack();

assert(JSON.stringify(stack.toArray()) === JSON.stringify([]));
assert(JSON.stringify(stack.toArray()) === JSON.stringify(stack2.toArray()));
assert(JSON.stringify(stack) === JSON.stringify(stack2));
assert(JSON.stringify(stack.toArray()) !== JSON.stringify([1]));

console.log('...Done');