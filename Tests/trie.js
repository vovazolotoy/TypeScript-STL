
console.log('Testing: Trie');

/**
 * Trie tests
 * @type {Trie}
 */
var Trie = require('./../Datastructures/trie.js');

// testing Queue
var trie = new Trie();
var trie2 = new Trie();


// Trie::insert
assert(trie.insert('Test') === undefined);

// Trie::contains
assert(trie.contains('Test') === true);