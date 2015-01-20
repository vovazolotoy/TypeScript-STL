
import Heap = require('./Heap');

/**
 * The PriorityQueue class provides the main functionality of an prioritized queue, implemented using a max heap.
 *
 * @class PriorityQueue
 * @extends Heap
 */
class PriorityQueue extends Heap {

    protected _type = Heap.MAX;

    /**
     * Adds an element to the queue
     *
     * @method enqueue
     * @param value The value to enqueue.
     * @param priority The priority of value.
     * @return void
     */
    public enqueue(value:any, priority:any) {
        return this.insert({value:value, priority:priority});
    }

    /**
     * Dequeues a node from the queue
     *
     * @method dequeue
     * @return any  The value of the dequeued node.
     */
    public dequeue() {
        return this.extract().value;
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
        if (first.value > second.value) {
            return 1;
        } else if (first.value == second.value) {
            return 0;
        } else {
            return -1;
        }
    }
}

export = PriorityQueue;