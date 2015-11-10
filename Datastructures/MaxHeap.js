var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Heap = require('./Heap');
/**
 * The MaxHeap class provides the main functionality of a heap, keeping the maximum on the top.
 *
 * @class MaxHeap
 * @extends Heap
 */
var MaxHeap = (function (_super) {
    __extends(MaxHeap, _super);
    function MaxHeap() {
        _super.apply(this, arguments);
        this._type = Heap.MAX;
    }
    return MaxHeap;
})(Heap);
module.exports = MaxHeap;
//# sourceMappingURL=MaxHeap.js.map