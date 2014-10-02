/**
* The Heap class provides the main functionality of a Heap.
*/
var Heap = (function () {
    function Heap() {
    }
    /**
    * Extracts a node from top of the heap and sift up
    *
    * @return any The value of the extracted node.
    */
    Heap.prototype.extract = function () {
    };

    /**
    * Inserts an element in the heap by sifting it up
    *
    * @param value The value to insert.
    * @return void
    */
    Heap.prototype.insert = function (value) {
    };

    /**
    * Peeks at the node from the top of the heap
    * @return any The value of the node on the top.
    */
    Heap.prototype.top = function () {
    };

    /**
    * Counts the number of elements in the heap
    *
    * @return number the number of elements in the heap.
    */
    Heap.prototype.count = function () {
        return 0;
    };

    /**
    * Checks whether the heap is empty
    *
    * @return boolean whether the heap is empty.
    */
    Heap.prototype.isEmpty = function () {
        return true;
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
    * @param any first The value of the first node being compared.
    * @param any second The value of the second node being compared.
    * @return number Result of the comparison, positive integer if value1 is greater than value2, 0 if they are equal, negative integer otherwise.
    * Having multiple elements with the same value in a Heap is not recommended. They will end up in an arbitrary relative position.
    */
    Heap.prototype.compare = function (first, second) {
        return 0;
    };
    return Heap;
})();
//# sourceMappingURL=Heap.js.map
