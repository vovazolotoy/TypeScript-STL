var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Heap = require('Heap');
/**
 * The MaxHeap class provides the main functionality of a heap, keeping the maximum on the top.
 */
var MaxHeap = (function (_super) {
    __extends(MaxHeap, _super);
    function MaxHeap() {
        _super.apply(this, arguments);
    }
    return MaxHeap;
})(Heap);
module.exports = MaxHeap;
//# sourceMappingURL=MaxHeap.js.map