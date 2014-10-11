/**
* The Standard TypeScript Library (STL) is a collection of interfaces and classes that are meant to solve common problems.
*/
var STL;
(function (STL) {
    /**
    * The Heap class provides the main functionality of a Heap.
    */
    var Heap = (function () {
        function Heap() {
            /**
            *
            * @type {Array}
            * @private
            */
            this._tree = [];
        }
        /**
        *
        * @param n
        * @return {number}
        */
        Heap.prototype.parent = function (n) {
            return Math.floor(n - 1 / 2);
        };

        Heap.prototype.child = function (n) {
            return 2 * n + 1;
        };

        /**
        *
        * @param n
        */
        Heap.prototype.shiftUp = function (i) {
            while (i > 0) {
                if (this._tree[i] <= this._tree[this.parent(i)]) {
                    var swap = this._tree[i];
                    this._tree[i] = this._tree[this.parent(i)];
                    this._tree[this.parent(i)] = swap;
                } else {
                    //return;
                }

                i = this.parent(i);
            }
        };

        /**
        *
        * @param n
        */
        Heap.prototype.shiftDown = function (i) {
            while (i > 0) {
                if (this._tree[i] <= this._tree[this.parent(i)]) {
                    var swap = this._tree[i];
                    this._tree[i] = this._tree[this.parent(i)];
                    this._tree[this.parent(i)] = swap;
                } else {
                    //return;
                }

                i = this.parent(i);
            }
        };

        /**
        * Extracts a node from top of the heap and sift up
        *
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
        * @param value The value to insert.
        * @return void
        */
        Heap.prototype.insert = function (value) {
            this._tree.push(value);
            this.shiftUp(this._tree.length);
        };

        /**
        * Peeks at the node from the top of the heap
        * @return any The value of the node on the top.
        */
        Heap.prototype.top = function () {
            return this._tree[0];
        };

        /**
        * Counts the number of elements in the heap
        *
        * @return number the number of elements in the heap.
        */
        Heap.prototype.count = function () {
            return this._tree.length;
        };

        /**
        * Checks whether the heap is empty
        *
        * @return boolean whether the heap is empty.
        */
        Heap.prototype.isEmpty = function () {
            return (this._tree.length === 0);
        };

        /**
        * Rewind iterator back to the start (no-op)
        *
        * @return void
        */
        Heap.prototype.rewind = function () {
        };

        /**
        * Return current node pointed by the iterator
        *
        * @return any The current node value.
        */
        Heap.prototype.current = function () {
        };

        /**
        * Return current node index
        *
        * @return any The current node index.
        */
        Heap.prototype.key = function () {
        };

        /**
        * Move to the next node
        *
        * @return void
        */
        Heap.prototype.next = function () {
        };

        /**
        * Check whether the heap contains more nodes
        *
        * @return boolean true if the heap contains any more nodes, false otherwise.
        */
        Heap.prototype.valid = function () {
            return false;
        };

        /**
        * Recover from the corrupted state and allow further actions on the heap.
        *
        * @return void
        */
        Heap.prototype.recoverFromCorruption = function () {
        };

        /**
        * Compare elements in order to place them correctly in the heap while sifting up.
        * @param first The value of the first node being compared.
        * @param second The value of the second node being compared.
        * @return number Result of the comparison, positive integer if value1 is greater than value2, 0 if they are equal, negative integer otherwise.
        * Having multiple elements with the same value in a Heap is not recommended. They will end up in an arbitrary relative position.
        */
        Heap.prototype.compare = function (first, second) {
            return 0;
        };

        Heap.prototype.line = function (node, prefix, last) {
            if (typeof prefix === "undefined") { prefix = ''; }
            if (typeof last === "undefined") { last = true; }
            var r = prefix + (last ? (prefix ? '└──' : '   ') : '├──') + this._tree[node];

            if (last) {
                prefix += '   ';
            } else {
                prefix = prefix + '│  ';
            }

            if (this._tree[this.child(node)]) {
                r += '\n' + this.line(this.child(node), prefix, false);
            }
            if (this._tree[this.child(node) + 1]) {
                r += '\n' + this.line(this.child(node) + 1, prefix, true);
            }

            return r;
        };

        /**
        * Serializes the heap to string
        *
        * @return string   The serialized string.
        */
        Heap.prototype.toString = function () {
            // start with root and recursively goes to each node
            return this.line(0);
        };
        return Heap;
    })();
    STL.Heap = Heap;
})(STL || (STL = {}));
//# sourceMappingURL=Heap.js.map
