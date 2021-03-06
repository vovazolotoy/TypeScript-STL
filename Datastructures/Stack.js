var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DoublyLinkedList = require('./DoublyLinkedList');
/**
 * The Stack class provides the main functionality of a stack implemented using a doubly linked list.
 *
 * @class Stack
 * @extends DoublyLinkedList
 */
var Stack = (function (_super) {
    __extends(Stack, _super);
    function Stack() {
        _super.apply(this, arguments);
    }
    return Stack;
})(DoublyLinkedList);
module.exports = Stack;
//# sourceMappingURL=Stack.js.map