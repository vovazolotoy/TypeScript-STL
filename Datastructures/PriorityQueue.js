var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Heap = require('./Heap');
/**
 * The PriorityQueue class provides the main functionality of an prioritized queue, implemented using a max heap.
 *
 * @class PriorityQueue
 * @extends Heap
 */
var PriorityQueue = (function (_super) {
    __extends(PriorityQueue, _super);
    function PriorityQueue() {
        _super.apply(this, arguments);
        this._type = Heap.MAX;
    }
    /**
     * Adds an element to the queue
     *
     * @method enqueue
     * @param value The value to enqueue.
     * @param priority The priority of value.
     * @return void
     */
    PriorityQueue.prototype.enqueue = function (value, priority) {
        //return this.push(value);
    };
    /**
     * Dequeues a node from the queue
     *
     * @method dequeue
     * @return any  The value of the dequeued node.
     */
    PriorityQueue.prototype.dequeue = function () {
        // return this.shift();
    };
    return PriorityQueue;
})(Heap);
module.exports = PriorityQueue;
//# sourceMappingURL=PriorityQueue.js.map