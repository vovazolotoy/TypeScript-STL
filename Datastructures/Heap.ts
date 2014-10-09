/**
 * The Heap class provides the main functionality of a Heap.
 */
class Heap {

    private _tree:Array = [];

    /**
     *
     * @param n
     * @return {number}
     */
    private parent(n:number):number {
        return Math.floor(n - 1 / 2);
    }

    private child(n:number):number {
        return 2 * n + 1;
    }
    private child2(n:number):number {
        return 2 * n + 2;
    }

    /**
     *
     * @param n
     */
    private shiftUp(n:number):void {
        while (n > 0) {
            if (this._tree[n] < this._tree[this.parent(n)]) {
                var swap = this._tree[n];
                this._tree[n] = this._tree[this.parent(n)];
                this._tree[this.parent(n)] = swap;
            } else {
                n = 0;
            }
            n = this.parent(n);
        }

    }

    /**
     * Extracts a node from top of the heap and sift up
     *
     * @return any The value of the extracted node.
     */
    public extract():any {
        var extracted:any = this._tree[0];
        this._tree[0] = this._tree.pop();
        return extracted;
    }

    /**
     * Inserts an element in the heap by sifting it up
     *
     * @param value The value to insert.
     * @return void
     */
    public insert(value:any):void {
        this._tree.push(value);
        this.shiftUp(this._tree.length);
    }

    /**
     * Peeks at the node from the top of the heap
     * @return any The value of the node on the top.
     */
    public top():any {
        return this._tree[0];
    }

    /**
     * Counts the number of elements in the heap
     *
     * @return number the number of elements in the heap.
     */
    public count():number {
        return this._tree.length;
    }

    /**
     * Checks whether the heap is empty
     *
     * @return boolean whether the heap is empty.
     */
    public isEmpty():boolean {
        return (this._tree.length === 0);
    }

    /**
     * Rewind iterator back to the start (no-op)
     *
     * @return void
     */
    public rewind():void {}

    /**
     * Return current node pointed by the iterator
     *
     * @return any The current node value.
     */
    public current():any {}

    /**
     * Return current node index
     *
     * @return any The current node index.
     */
    public key():any {}

    /**
     * Move to the next node
     *
     * @return void
     */
    public next():void {}

    /**
     * Check whether the heap contains more nodes
     *
     * @return boolean true if the heap contains any more nodes, false otherwise.
     */
    public valid():boolean {
        return false;
    }

    /**
     * Recover from the corrupted state and allow further actions on the heap.
     *
     * @return void
     */
    public recoverFromCorruption():void {}

    /**
     * Compare elements in order to place them correctly in the heap while sifting up.
     * @param first The value of the first node being compared.
     * @param second The value of the second node being compared.
     * @return number Result of the comparison, positive integer if value1 is greater than value2, 0 if they are equal, negative integer otherwise.
     * Having multiple elements with the same value in a Heap is not recommended. They will end up in an arbitrary relative position.
     */
    public compare(first:any, second:any):number {
        return 0;
    }

    private line(n, prefix = '', last = true) {

            var r = prefix + (last ? (prefix ? '└──' : '   ') : '├──') + this._tree[n];
        //}

        if (last) {
            prefix = prefix + '   ';
        } else {
            prefix = prefix + '│  ';
        }

        if (this._tree[this.child(n)]) {
            r += '\n' + this.line(this.child(n), prefix, false);
        }
        if (this._tree[this.child2(n)]) {
            r += '\n' + this.line(this.child2(n), prefix, true);
        }

        return r;
    }

    /**
     * Serializes the heap to string
     *
     * @return string   The serialized string.
     */
    public toString():string {
        var val = {
            d:1,
            c1:{
                d:2,
                c1:{
                    d:3,
                    c1:{d:4
                    },
                    c2:{d:4
                    }
                },
                c2:{
                    d:3,
                    c1:{d:4
                    },
                    c2:{d:4
                    }
                }
            },
            c2:{d:2,
                c1: {d:'vova',
                    c1: 3,
                    c2: {d:'deep'}
                },
                c2: {d:'zolotoy',
                    c1: {d:789},
                    c2: {d:39876}
                }
            }
        };
        return this.line(0);
        return this.line(
            {d:1,
                c1:{d:2, c1:{d:3, c1:{d:4, c1:null, c2:null}, c2:{d:4, c1:null, c2:null}}, c2:null}, c2:{d:4, c1:{d:4, c1:null, c2:null}, c2:{d:2, c1:null, c2:null}}}, '');
        return "0 \n\
 ├─ 1 \n\
 │  ├─ 2\n\
 │  │    └─ 3\n\
 │  └─ 4\n\
 │    ├─ 5\n\
 │    └ 6";
    }
}
var heap = new Heap();
for (var i = 160; i > 0; i--) {
    //heap.insert(Math.round(Math.random() * 100));
}
heap.insert(19);
heap.insert(36);
heap.insert(7);
heap.insert(25);
heap.insert(17);
heap.insert(100);
heap.insert(1);
heap.insert(2);
heap.insert(3);
console.log(heap);
console.log('' + heap);
