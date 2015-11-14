
console.log('Testing: Trie');

/**
 * Trie tests
 * @type {Trie}
 */
var Trie = require('./../Datastructures/trie.js');

// testing Queue
var trie = new Trie();

// Trie::insert
assert(trie.insert('Test', 1) === undefined);
assert(trie.insert('Test', 3) === undefined);
assert(trie.insert('Terarium', 3) === undefined);
assert(trie.insert('ferarium', 3) === undefined);
assert(trie.insert('t', 'haha') === undefined);
assert(trie.insert('Testing', 'Vova') === undefined);

console.log(trie);

// Trie::contains
//assert(trie.contains('Test') === true);