
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
        //return this.push(value);
    }

    /**
     * Dequeues a node from the queue
     *
     * @method dequeue
     * @return any  The value of the dequeued node.
     */
    public dequeue() {
        // return this.shift();
    }

}

export = PriorityQueue;