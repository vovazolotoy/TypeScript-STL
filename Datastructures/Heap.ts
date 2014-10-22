/**
 * The Heap class provides the main functionality of a Heap.
 */
class Heap {

    /**
     *
     * @type Array
     * @private
     */
    private _tree:Array<any> = [];

    /**
     *
     * @param n
     * @return number
     */
    private _parent(n:number):number {
        return Math.floor(n - 1 / 2);
    }

    private _child(n:number):number {
        return 2 * n + 1;
    }

    /**
     *
     * @param n
     */
    private shiftUp(i:number):void {
        while (i > 0) {
            if (this._tree[i] <= this._tree[this._parent(i)]) {

                var swap = this._tree[i];
                this._tree[i] = this._tree[this._parent(i)];
                this._tree[this._parent(i)] = swap;

            } else {
                break;
            }

            i = this._parent(i);
        }
    }

    /**
     *
     * @param n
     */
    private shiftDown(i:number):void {
        while (i > 0) {
            if (this._tree[i] <= this._tree[this._parent(i)]) {

                var swap = this._tree[i];
                this._tree[i] = this._tree[this._parent(i)];
                this._tree[this._parent(i)] = swap;

            } else {
                //return;
            }

            i = this._parent(i);
        }
    }

    /**
     * Extracts a node from top of the heap and sift up
     *
     * @return any The value of the extracted node.
     */
    public extract():any {
        var extracted:any = this._tree[0];
        this._tree[0] = this._tree.pop();
        return extracted;
    }

    /**
     * Inserts an element in the heap by sifting it up
     *
     * @param value The value to insert.
     * @return void
     */
    public insert(value:any):void {
        this._tree.push(value);
        this.shiftUp(this._tree.length);
    }

    /**
     * Peeks at the node from the top of the heap
     * @return any The value of the node on the top.
     */
    public top():any {
        return this._tree[0];
    }

    /**
     * Counts the number of elements in the heap
     *
     * @return number the number of elements in the heap.
     */
    public count():number {
        return this._tree.length;
    }

    /**
     * Checks whether the heap is empty
     *
     * @return boolean whether the heap is empty.
     */
    public isEmpty():boolean {
        return (this._tree.length === 0);
    }

    /**
     * Rewind iterator back to the start (no-op)
     *
     * @return void
     */
    public rewind():void {
    }

    /**
     * Return current node pointed by the iterator
     *
     * @return any The current node value.
     */
    public current():any {
    }

    /**
     * Return current node index
     *
     * @return any The current node index.
     */
    public key():any {
    }

    /**
     * Move to the next node
     *
     * @return void
     */
    public next():void {
    }

    /**
     * Check whether the heap contains more nodes
     *
     * @return boolean true if the heap contains any more nodes, false otherwise.
     */
    public valid():boolean {
        return false;
    }

    /**
     * Recover from the corrupted state and allow further actions on the heap.
     *
     * @return void
     */
    public recoverFromCorruption():void {
    }

    /**
     * Compare elements in order to place them correctly in the heap while sifting up.
     * @param first The value of the first node being compared.
     * @param second The value of the second node being compared.
     * @return number Result of the comparison, positive integer if value1 is greater than value2, 0 if they are equal, negative integer otherwise.
     * Having multiple elements with the same value in a Heap is not recommended. They will end up in an arbitrary relative position.
     */
    public compare(first:any, second:any):number {
        return 1;
    }

    /**
     *
     * @param node
     * @param prefix
     * @param last
     * @return {string}
     * @private
     */
    private _displayNode(node, prefix = '', last = true) {

        var r = prefix + (last ? (prefix ? '└──' : '   ') : '├──') + this._tree[node];
        //}

        if (last) {
            prefix += '   ';
        } else {
            prefix = prefix + '│  ';
        }

        if (this._tree[this._child(node)]) {
            r += '\n' + this._displayNode(this._child(node), prefix, false);
        }
        if (this._tree[this._child(node) + 1]) {
            r += '\n' + this._displayNode(this._child(node) + 1, prefix, true);
        }

        return r;
    }

    /**
     * Serializes the heap to string
     *
     * @return string   The serialized string.
     */
    public toString():string {

        // start with root and recursively goes to each node
        return this._displayNode(0);
    }
}

export = Heap;