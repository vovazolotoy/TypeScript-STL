
/**
 * The Trie class
 *
 * @class Trie
 */
class Trie {

    private _root:TrieNode = null;

    public constructor(){
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
    public insert(word:string, value:any):void {
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
    }

    /**
     * Get
     * @param word
     * @return {TrieNode}
     */
    private getNode(word:string):TrieNode {
        var node = this._root;
        for (var i = 0; i < word.length; i++) {
            var w = word.charCodeAt(i);
            if (node.children[w]) {
                node = node.children[w];
            } else {
                return null;
            }
        }
        return node;
    }

    /**
     *
     * @param word
     * @return {boolean}
     */
    public contains(word:string):boolean {
        var node = this.getNode(word);
        return node ? true : false;
    }
}

interface TrieNode {
    children:Array<TrieNode>;
    value:Array<any>;
}

export = Trie;