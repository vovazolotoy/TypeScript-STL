/**
 * The Heap class provides the main functionality of a Heap.
 */
class Heap {

    /**
     * Extracts a node from top of the heap and sift up
     *
     * @return any The value of the extracted node.
     */
    public extract():any {}

    /**
     * Inserts an element in the heap by sifting it up
     *
     * @param value The value to insert.
     * @return void
     */
    public insert(value:any):void {}

    /**
     * Peeks at the node from the top of the heap
     * @return any The value of the node on the top.
     */
    public top():any {}

    /**
     * Counts the number of elements in the heap
     *
     * @return number the number of elements in the heap.
     */
    public count():number {
        return 0;
    }

    /**
     * Checks whether the heap is empty
     *
     * @return boolean whether the heap is empty.
     */
    public isEmpty():boolean {
        return true;
    }

    /**
     * Rewind iterator back to the start (no-op)
     *
     * @return void
     */
    public rewind():void {}

    /**
     * Return current node pointed by the iterator
     *
     * @return any The current node value.
     */
    public current():any {}

    /**
     * Return current node index
     *
     * @return any The current node index.
     */
    public key():any {}

    /**
     * Move to the next node
     *
     * @return void
     */
    public next():void {}

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
    public recoverFromCorruption():void {}

    /**
     * Compare elements in order to place them correctly in the heap while sifting up.
     * @param any first The value of the first node being compared.
     * @param any second The value of the second node being compared.
     * @return number Result of the comparison, positive integer if value1 is greater than value2, 0 if they are equal, negative integer otherwise.
     * Having multiple elements with the same value in a Heap is not recommended. They will end up in an arbitrary relative position.
     */
    public compare(first:any, second:any):number {
        return 0;
    }
}
