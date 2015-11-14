var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Heap = require('./Heap');
/**
 * The MinHeap class provides the main functionality of a heap, keeping the minimum on the top.
 *
 * @class MinHeap
 * @extends Heap
 */
var MinHeap = (function (_super) {
    __extends(MinHeap, _super);
    function MinHeap() {
        _super.apply(this, arguments);
        this._type = Heap.MIN;
    }
    return MinHeap;
})(Heap);
module.exports = MinHeap;
//# sourceMappingURL=MinHeap.js.map