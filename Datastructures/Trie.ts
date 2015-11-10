
/**
 * The Trie class
 *
 * @class Trie
 */
class Trie {

    private _root:TrieNode = null;

    /**
     * Adds a word to the trie
     *
     * @param word A word to insert.
     */
    public insert(word:string) {

    }

    /**
     *
     * @param word
     * @return {boolean}
     */
    public contains(word:string) {
        return true;
    }
}

interface TrieNode {
    children:Array<TrieNode>;
    value:Array<any>;
}

export = Trie;