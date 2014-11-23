
console.log('Testing: Stack');

/**
 * Stack tests
 * @type {Stack}
 */
var Stack = require('./../Datastructures/Stack.js');

// testing stacks
var stack = new Stack();
var stack2 = new Stack();

// Stack::push
assert(stack.push(1) === undefined);
assert(JSON.stringify(stack.toArray()) === JSON.stringify([1]));
assert(stack.push(2) === undefined);
assert(JSON.stringify(stack.toArray()) === JSON.stringify([1, 2]));
assert(stack.push(3) === undefined);
assert(JSON.stringify(stack.toArray()) === JSON.stringify([1, 2, 3]));
assert(stack.push(4) === undefined);
assert(JSON.stringify(stack.toArray()) === JSON.stringify([1, 2, 3, 4]));
assert(stack2.push() === undefined);
assert(JSON.stringify(stack2.toArray()) === JSON.stringify([undefined]));
assert(stack2.push(null) === undefined);
assert(JSON.stringify(stack2.toArray()) === JSON.stringify([undefined, null]));
assert(stack2.push(false) === undefined);
assert(JSON.stringify(stack2.toArray()) === JSON.stringify([undefined, null, false]));

