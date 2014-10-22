/**
 * The DoublyLinkedList class provides the main functionality of a doubly linked list.
 */
export class DoublyLinkedList {

    /**
     * Count of elements in list
     * @type number
     * @private
     */
    private _length = 0;

    /**
     * Iteration pointer
     * @type number
     * @private
     */
    private _key = 0;

    /**
     * Reference to head(first) element in list
     * @type DoublyLinkedListNode
     * @private
     */
    private _head:DoublyLinkedListNode = null;

    /**
     * Reference to tail(last) element in list
     * @type DoublyLinkedListNode
     * @private
     */
    private _tail:DoublyLinkedListNode = null;

    /**
     * Reference to iterated element in list
     * @type DoublyLinkedListNode
     * @private
     */
    private _current:DoublyLinkedListNode = null;

    /**
     * Insert a new value at the specified index
     *
     * @param index The index where the new value is to be inserted.
     * @param value The new value for the index.
     * @return void
     */
    public add(index:any, value:any):void {
        // TODO:
    }

    /**
     * Pops a node from the end of the doubly linked list
     *
     * @return any  The value of the popped node.
     */
    public pop():any {
        if (this._length === 0) {
            throw new Error("Can't pop from an empty data structure");
        }

        var value = this._tail.value;

        this._tail = this._tail.prev;
        if (this._tail) {
            delete this._tail.next;
            this._tail.next = null;
        }

        this._length--;

        return value;
    }

    /**
     * Shifts a node from the beginning of the doubly linked list
     *
     * @return any  The value of the shifted node.
     */
    public shift():any {
        if (this._length === 0) {
            throw new Error("Can't shift from an empty data structure");
        }

        var value = this._head.value;

        this._head = this._head.next;
        if (this._head) {
            delete this._head.prev;
            this._head.prev = null;
        }

        this._length--;

        return value;
    }

    /**
     * Pushes an element at the end of the doubly linked list
     *
     * @param value The value to push.
     * @return void
     */
    public push(value:any):void {
        // allocate new node
        var node:DoublyLinkedListNode = {
            value: value,
            prev: this._tail,
            next: null
        };

        if (this._length === 0) {
            this._head = this._tail = node;
        } else {
            this._tail.next = node;
            this._tail = this._tail.next;
        }

        this._length++;
    }

    /**
     * Prepends the doubly linked list with an element
     *
     * @param value The value to unshift.
     * @return void
     */
    public unshift(value:any):void {
        // allocate new node
        var node:DoublyLinkedListNode = {
            value: value,
            prev: null,
            next: this._head
        };

        if (this._length === 0) {
            this._head = this._tail = node;
        } else {
            this._head.prev = node;
            this._head = this._head.prev;
        }

        this._length++;
    }

    /**
     * Peeks at the node from the end of the doubly linked list
     *
     * @return any  The value of the last node.
     */
    public top():any {
        return this._tail.value;
    }

    /**
     * Peeks at the node from the beginning of the doubly linked list
     *
     * @return any  The value of the first node.
     */
    public bottom():any {
        return this._head.value;
    }

    /**
     * Counts the number of elements in the doubly linked list
     *
     * @return number the number of elements in the doubly linked list.
     */
    public count():number {
        return this._length;
    }

    /**
     * Checks whether the doubly linked list is empty
     *
     * @return boolean whether the doubly linked list is empty.
     */
    public isEmpty():boolean {
        return (this._length === 0);
    }

    /**
     * Rewind iterator back to the start
     *
     * @return void
     */
    public rewind():void {
        this._key = 0;
        this._current = this._head;
    }

    /**
     * Return current list entry
     *
     * @return any  The current node value.
     */
    public current():any {
        if (this._current) {
            return this._current.value;
        }
        return null;
    }

    /**
     * Return current node index
     *
     * @return any  The current node index.
     */
    public key():any {
        return this._key;
    }

    /**
     * Move to next entry
     *
     * @return void
     */
    public next():void {
        this._current = this._current.next;
        this._key++;
    }

    /**
     * Move to previous entry
     *
     * @return void
     */
    public prev():void {
        this._current = this._current.prev;
        this._key--;
    }

    /**
     * Check whether the doubly linked list contains more nodes
     *
     * @return boolean true if the doubly linked list contains any more nodes, false otherwise.
     */
    public valid():boolean {
        return (this._key >= 0 && this._key < this._length);
    }

    /**
     * Export the list to array
     * @return Array   The exported array
     */
    public toArray():Array<any> {
        var list = [];
        var current = this._head;
        while (current) {
            list.push(current.value);
            current = current.next;
        }
        return list;
    }

    /**
     * Serializes the list to string
     *
     * @return string   The serialized string.
     */
    public toString():string {
        return "{" + this.toArray().join("->") + "}";
    }
}

/**
 * DoublyLinkedList element
 */
export interface DoublyLinkedListNode {
    value:any;
    prev:DoublyLinkedListNode;
    next:DoublyLinkedListNode;
}