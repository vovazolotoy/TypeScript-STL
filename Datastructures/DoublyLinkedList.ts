/**
 * The DoublyLinkedList class provides the main functionality of a doubly linked list.
 */
class DoublyLinkedList {

    private _length = 0;

    private _head:DoublyLinkedListNode = null;

    private _tail:DoublyLinkedListNode = null;

    /**
     * Insert a new value at the specified index
     *
     * @param index The index where the new value is to be inserted.
     * @param value The new value for the index.
     * @return void
     */
    public add(index:any, value:any):void {
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
            prev:this._tail,
            next:null
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
            prev:null,
            next:this._head
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

    }

    /**
     * Return current list entry
     *
     * @return any  The current node value.
     */
    public current():any {

    }

    /**
     * Return current node index
     *
     * @return any  The current node index.
     */
    public key():any {

    }

    /**
     * Move to next entry
     *
     * @return void
     */
    public next():void {

    }

    /**
     * Move to previous entry
     *
     * @return void
     */
    public prev():void {

    }

    /**
     * Check whether the doubly linked list contains more nodes
     *
     * @return boolean true if the doubly linked list contains any more nodes, false otherwise.
     */
    public valid():boolean {
        return false;
    }

    /**
     * Serializes the list
     *
     * @return string The serialized string.
     */
    public  toString():string {
        if (this._length === 0) {
            return "{}"
        }

        var node = this._head;
        var value = node.value;
        while (node = node.next) {
            value += " > " + node.value;
        }

        return "{" + value + "}";
    }
}

/**
 * DoublyLinkedList element
 */
interface DoublyLinkedListNode {
    value:any;
    prev:DoublyLinkedListNode;
    next:DoublyLinkedListNode;
}


var list = new DoublyLinkedList();
console.log(list.isEmpty());
for (var i = 0; i < 10; i++) {
    list.push(i);
}