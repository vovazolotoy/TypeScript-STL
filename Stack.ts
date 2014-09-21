/**
 * TypeScript Data structures
 */
class Stack {

    private elements:Array;

    /**
     * Appends new elements to a stack, and returns the new length of the stack.
     * @param item
     * @returns {number}
     */
    public push(item:any):number {
        return this.elements.push(item);
    }

    /**
     * Removes the last element from a stack and returns it.
     * @returns any
     */
    public pop():any {
        return this.elements.pop();
    }
}