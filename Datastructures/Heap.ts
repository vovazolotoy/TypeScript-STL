/**
 * The Heap class provides the main functionality of a Heap.
 *
 * @class Heap
 */
class Heap {

    /**
     * Binary tree storage array
     *
     * @property _tree
     * @type Array
     * @private
     */
    private _tree:Array<any> = [];

    /**
     * Get index of left child element in binary tree stored in array
     *
     * @method _child
     * @param n
     * @return number
     * @private
     */
    private _child(n:number):number {
        return 2 * n + 1;
    }

    /**
     * Get index of parent element in binary tree stored in array
     *
     * @method _parent
     * @param n
     * @return number
     * @private
     */
    private _parent(n:number):number {
        return Math.floor(n - 1 / 2);
    }

    /**
     * Sift elements in binary tree
     *
     * @method siftUp
     * @param i
     * @private
     */
    private siftUp(i:number):void {
        while (i > 0) {
            var parent = this._parent(i);
            if (this.compare(this._tree[i], this._tree[parent]) * this.TYPE < 0) {
                var swap = this._tree[i];
                this._tree[i] = this._tree[parent];
                this._tree[parent] = swap;
            } else {
                break;
            }

            i = this._parent(i);
        }
    }

    /**
     * Shift elements in binary tree
     *
     * @method siftDown
     * @param i
     * @private
     */
    private siftDown(i:number):void {
        /*
         for (i = 0; i < limit; i = j) {
		 Find smaller child
        j = i * 2 + 1;
        if(j != heap->count && heap->cmp(&heap->elements[j+1], &heap->elements[j], cmp_userdata TSRMLS_CC) > 0) {
            j++; /* next child is bigger
        }

         swap elements between two levels
        if(heap->cmp(bottom, &heap->elements[j], cmp_userdata TSRMLS_CC) < 0) {
            heap->elements[i] = heap->elements[j];
        } else {
            break;
        }
    }

         Delete[edit]
         The procedure for deleting the root from the heap (effectively extracting the maximum element in a max-heap or the minimum element in a min-heap) and restoring the properties is called down-heap (also known as bubble-down, percolate-down, sift-down, trickle down, heapify-down, cascade-down and extract-min/max).

         Replace the root of the heap with the last element on the last level.
         Compare the new root with its children; if they are in the correct order, stop.
         If not, swap the element with one of its children and return to the previous step. (Swap with its smaller child in a min-heap and its larger child in a max-heap.)
         So, if we have the same max-heap as before

         */
        while (i < this._tree.length) {
            var child = this._child(i);
            if (this.compare(this._tree[i], this._tree[child]) > 0) {
                var swap = this._tree[i];
                this._tree[i] = this._tree[child];
                this._tree[child] = swap;
            } else if (this.compare(this._tree[i], this._tree[child + 1]) > 0) {
                var swap = this._tree[i];
                this._tree[i] = this._tree[child + 1];
                this._tree[child + 1] = swap;
            } else {
                {
                break;
            }

            i = this._child(i);
        }
    }

    /**
     * Extracts a node from top of the heap and sift up
     *
     * @method extract
     * @return any The value of the extracted node.
     */
    public extract():any {
        var extracted:any = this._tree[0];
        this._tree[0] = this._tree.pop();

        this.siftDown(0);

        return extracted;
    }

    /**
     * Inserts an element in the heap by sifting it up
     *
     * @method insert
     * @param value The value to insert.
     * @return void
     */
    public insert(value:any):void {
        this._tree.push(value);
        this.siftUp(this._tree.length - 1);
    }

    /**
     * Peeks at the node from the top of the heap
     *
     * @method top
     * @return any The value of the node on the top.
     */
    public top():any {
        return this._tree[0];
    }

    /**
     * Counts the number of elements in the heap
     *
     * @method count
     * @return number the number of elements in the heap.
     */
    public count():number {
        return this._tree.length;
    }

    /**
     * Checks whether the heap is empty
     *
     * @method isEmpty
     * @return boolean whether the heap is empty.
     */
    public isEmpty():boolean {
        return (this._tree.length === 0);
    }

    /**
     * Rewind iterator back to the start (no-op)
     *
     * @method rewind
     * @return void
     */
    public rewind():void {
    }

    /**
     * Return current node pointed by the iterator
     *
     * @method current
     * @return any The current node value.
     */
    public current():any {
    }

    /**
     * Return current node index
     *
     * @method key
     * @return any The current node index.
     */
    public key():any {
    }

    /**
     * Move to the next node
     *
     * @method next
     * @return void
     */
    public next():void {
    }

    /**
     * Check whether the heap contains more nodes
     *
     * @method valid
     * @return boolean true if the heap contains any more nodes, false otherwise.
     */
    public valid():boolean {
        return false;
    }

    /**
     * Recover from the corrupted state and allow further actions on the heap.
     *
     * @method recoverFromCorruption
     * @return void
     */
    public recoverFromCorruption():void {
    }

    /**
     * Compare elements in order to place them correctly in the heap while sifting up.
     *
     * @method compare
     * @param first The value of the first node being compared.
     * @param second The value of the second node being compared.
     * @return number Result of the comparison, positive integer if first is greater than second, 0 if they are equal, negative integer otherwise.
     * Having multiple elements with the same value in a Heap is not recommended. They will end up in an arbitrary relative position.
     */
    public compare(first:any, second:any):number {
        if (first > second) {
            return 1;
        } else if (first == second) {
            return 0;
        } else {
            return -1;
        }
    }

    /**
     *
     * @method _displayNode
     * @param node
     * @param prefix
     * @param last
     * @return String
     * @private
     */
    private _displayNode(node, prefix = '', last = true) {

        var line = prefix + (last ? (prefix ? '└──' : '   ') : '├──') + this._tree[node];

        if (last) {
            prefix += '   ';
        } else {
            prefix = prefix + '│  ';
        }

        if (this._tree[this._child(node)]) {
            line += '\n' + this._displayNode(this._child(node), prefix, false);
        }
        if (this._tree[this._child(node) + 1]) {
            line += '\n' + this._displayNode(this._child(node) + 1, prefix, true);
        }

        return line;
    }

    /**
     * Serializes the heap to string
     *
     * @method toString
     * @return string   The serialized string.
     */
    public toString():string {
        // start with root and recursively goes to each node
        return this._displayNode(0);
    }

    /**
     * Serializes the heap to array
     *
     * @method toArray
     * @return Array   The serialized array.
     */
    public toArray():any[] {
        return this._tree;
    }
}

export = Heap;