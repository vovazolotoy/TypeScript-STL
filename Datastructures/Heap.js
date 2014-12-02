/**
 * The Heap class provides the main functionality of a Heap.
 *
 * @class Heap
 */
var Heap = (function () {
    function Heap() {
        /**
         * Binary tree storage array
         *
         * @property _tree
         * @type Array
         * @private
         */
        this._tree = [];
    }
    /**
     *
     * @method _parent
     * @param n
     * @return number
     * @private
     */
    Heap.prototype._parent = function (n) {
        return Math.floor(n - 1 / 2);
    };
    /**
     *
     * @method _child
     * @param n
     * @return number
     * @private
     */
    Heap.prototype._child = function (n) {
        return 2 * n + 1;
    };
    /**
     *
     * @method shiftUp
     * @param i
     * @private
     */
    Heap.prototype.shiftUp = function (i) {
        while (i > 0) {
            var p = this._parent(i);
            console.log('Compare i=' + i + ' [' + this._tree[i] + '] with parent ' + p + ' [' + this._tree[p] + '] ');
            var compare = this.compare(this._tree[i], this._tree[p]);
            if (compare < 0) {
                console.log(' ... swap +');
                var swap = this._tree[i];
                this._tree[i] = this._tree[p];
                this._tree[p] = swap;
            }
            else {
                console.log(' ... swap -/ BREAK');
                break;
            }
            i = this._parent(i);
        }
    };
    /**
     *
     * @method shiftDown
     * @param i
     * @private
     */
    Heap.prototype.shiftDown = function (i) {
        while (i > 0) {
            if (this._tree[i] <= this._tree[this._parent(i)]) {
                var swap = this._tree[i];
                this._tree[i] = this._tree[this._parent(i)];
                this._tree[this._parent(i)] = swap;
            }
            else {
            }
            i = this._parent(i);
        }
    };
    /**
     * Extracts a node from top of the heap and sift up
     *
     * @method extract
     * @return any The value of the extracted node.
     */
    Heap.prototype.extract = function () {
        var extracted = this._tree[0];
        this._tree[0] = this._tree.pop();
        return extracted;
    };
    /**
     * Inserts an element in the heap by sifting it up
     *
     * @method insert
     * @param value The value to insert.
     * @return void
     */
    Heap.prototype.insert = function (value) {
        this._tree.push(value);
        this.shiftUp(this._tree.length - 1);
    };
    /**
     * Peeks at the node from the top of the heap
     *
     * @method top
     * @return any The value of the node on the top.
     */
    Heap.prototype.top = function () {
        return this._tree[0];
    };
    /**
     * Counts the number of elements in the heap
     *
     * @method count
     * @return number the number of elements in the heap.
     */
    Heap.prototype.count = function () {
        return this._tree.length;
    };
    /**
     * Checks whether the heap is empty
     *
     * @method isEmpty
     * @return boolean whether the heap is empty.
     */
    Heap.prototype.isEmpty = function () {
        return (this._tree.length === 0);
    };
    /**
     * Rewind iterator back to the start (no-op)
     *
     * @method rewind
     * @return void
     */
    Heap.prototype.rewind = function () {
    };
    /**
     * Return current node pointed by the iterator
     *
     * @method current
     * @return any The current node value.
     */
    Heap.prototype.current = function () {
    };
    /**
     * Return current node index
     *
     * @method key
     * @return any The current node index.
     */
    Heap.prototype.key = function () {
    };
    /**
     * Move to the next node
     *
     * @method next
     * @return void
     */
    Heap.prototype.next = function () {
    };
    /**
     * Check whether the heap contains more nodes
     *
     * @method valid
     * @return boolean true if the heap contains any more nodes, false otherwise.
     */
    Heap.prototype.valid = function () {
        return false;
    };
    /**
     * Recover from the corrupted state and allow further actions on the heap.
     *
     * @method recoverFromCorruption
     * @return void
     */
    Heap.prototype.recoverFromCorruption = function () {
    };
    /**
     * Compare elements in order to place them correctly in the heap while sifting up.
     *
     * @method compare
     * @param first The value of the first node being compared.
     * @param second The value of the second node being compared.
     * @return number Result of the comparison, positive integer if value1 is greater than value2, 0 if they are equal, negative integer otherwise.
     * Having multiple elements with the same value in a Heap is not recommended. They will end up in an arbitrary relative position.
     */
    Heap.prototype.compare = function (first, second) {
        if (first > second) {
            return 1;
        }
        else if (first == second) {
            return 0;
        }
        else {
            return -1;
        }
    };
    /**
     *
     * @method _displayNode
     * @param node
     * @param prefix
     * @param last
     * @return String
     * @private
     */
    Heap.prototype._displayNode = function (node, prefix, last) {
        if (prefix === void 0) { prefix = ''; }
        if (last === void 0) { last = true; }
        var line = prefix + (last ? (prefix ? '└──' : '   ') : '├──') + this._tree[node];
        if (last) {
            prefix += '   ';
        }
        else {
            prefix = prefix + '│  ';
        }
        if (this._tree[this._child(node)]) {
            line += '\n' + this._displayNode(this._child(node), prefix, false);
        }
        if (this._tree[this._child(node) + 1]) {
            line += '\n' + this._displayNode(this._child(node) + 1, prefix, true);
        }
        return line;
    };
    /**
     * Serializes the heap to string
     *
     * @method toString
     * @return string   The serialized string.
     */
    Heap.prototype.toString = function () {
        // start with root and recursively goes to each node
        return this._displayNode(0);
    };
    /**
     * Serializes the heap to array
     *
     * @method toArray
     * @return Array   The serialized array.
     */
    Heap.prototype.toArray = function () {
        return this._tree;
    };
    return Heap;
})();
module.exports = Heap;
//# sourceMappingURL=Heap.js.map