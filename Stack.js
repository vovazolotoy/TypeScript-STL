/**
* TypeScript Data structures
*/
var Stack = (function () {
    function Stack() {
        this.elements = [];
    }
    /**
    * Appends new elements to a stack, and returns the new length of the stack.
    * @param item
    * @returns {number}
    */
    Stack.prototype.push = function (item) {
        return this.elements.push(item);
    };

    /**
    * Removes the last element from a stack and returns it.
    * @returns any
    */
    Stack.prototype.pop = function () {
        return this.elements.pop();
    };
    return Stack;
})();
//# sourceMappingURL=Stack.js.map
