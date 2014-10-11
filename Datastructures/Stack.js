var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="DoublyLinkedList.ts"/>
/**
* The Standard TypeScript Library (STL) is a collection of interfaces and classes that are meant to solve common problems.
*/
var STL;
(function (STL) {
    /**
    * The Stack class provides the main functionality of a stack implemented using a doubly linked list.
    */
    var Stack = (function (_super) {
        __extends(Stack, _super);
        function Stack() {
            _super.apply(this, arguments);
        }
        return Stack;
    })(STL.DoublyLinkedList);
})(STL || (STL = {}));
//# sourceMappingURL=Stack.js.map
