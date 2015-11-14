/**
 * The Trie class
 *
 * @class Trie
 */
var Trie = (function () {
    function Trie() {
        this._root = null;
        this._root = {
            children: [],
            value: []
        };
    }
    /**
     * Adds a word to the trie
     *
     * @param word A word to insert.
     */
    /**
     * Insert new element to Trie
     *
     * @param word
     * @param value
     */
    Trie.prototype.insert = function (word, value) {
        var node = this._root;
        for (var i = 0; i < word.length; i++) {
            var w = word[i];
            if (node.children[w] === undefined) {
                node.children[w] = {
                    children: [],
                    value: []
                };
            }
            node = node.children[w];
        }
        node.value.push(value);
    };
    /**
     * Get
     * @param word
     * @return {TrieNode}
     */
    Trie.prototype.getNode = function (word) {
        var node = this._root;
        for (var i = 0; i < word.length; i++) {
            var w = word.charCodeAt(i);
            if (node.children[w]) {
                node = node.children[w];
            }
            else {
                return null;
            }
        }
        return node;
    };
    /**
     *
     * @param word
     * @return {boolean}
     */
    Trie.prototype.contains = function (word) {
        var node = this.getNode(word);
        return node ? true : false;
    };
    return Trie;
})();
module.exports = Trie;
//# sourceMappingURL=Trie.js.map