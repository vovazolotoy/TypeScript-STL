#DoublyLinkedList

The DoublyLinkedList class provides the main functionality of a doubly linked list.

##Properties

###_length

Count of elements in list

**type**: number

###_key

Iteration pointer

**type**: number

###_head

Reference to head(first) element in list

**type**: DoublyLinkedListNode

###_tail

Reference to tail(last) element in list

**type**: DoublyLinkedListNode

###_current

Reference to iterated element in list

**type**: DoublyLinkedListNode

##Methods

###add

Insert a new value at the specified index

**Returns**: __ - void

**Params**:  
*   index __

    The index where the new value is to be inserted.
*   value __

    The new value for the index.


###pop

Pops a node from the end of the doubly linked list

**Returns**: __ - any  The value of the popped node.

###shift

Shifts a node from the beginning of the doubly linked list

**Returns**: __ - any  The value of the shifted node.

###push

Pushes an element at the end of the doubly linked list

**Returns**: __ - void

**Params**:  
*   value __

    The value to push.


###unshift

Prepends the doubly linked list with an element

**Returns**: __ - void

**Params**:  
*   value __

    The value to unshift.


###top

Peeks at the node from the end of the doubly linked list

**Returns**: __ - any  The value of the last node.

###bottom

Peeks at the node from the beginning of the doubly linked list

**Returns**: __ - any  The value of the first node.

###count

Counts the number of elements in the doubly linked list

**Returns**: __ - number the number of elements in the doubly linked list.

###isEmpty

Checks whether the doubly linked list is empty

**Returns**: __ - boolean whether the doubly linked list is empty.

###rewind

Rewind iterator back to the start

**Returns**: __ - void

###current

Return current list entry

**Returns**: __ - any  The current node value.

###key

Return current node index

**Returns**: __ - any  The current node index.

###next

Move to next entry

**Returns**: __ - void

###prev

Move to previous entry

**Returns**: __ - void

###valid

Check whether the doubly linked list contains more nodes

**Returns**: __ - boolean true if the doubly linked list contains any more nodes, false otherwise.

###toArray

Export the list to array

**Returns**: __ - Array   The exported array

###toString

Serializes the list to string

**Returns**: __ - string   The serialized string.

#Heap

The Heap class provides the main functionality of a Heap.

##Properties

###_tree

Binary tree storage array

**type**: Array

##Methods

###_parent

**Returns**: __ - number

**Params**:  
*   n __

    


###_child

**Returns**: __ - number

**Params**:  
*   n __

    


###shiftUp

**Params**:  
*   i __

    


###shiftDown

**Params**:  
*   i __

    


###extract

Extracts a node from top of the heap and sift up

**Returns**: __ - any The value of the extracted node.

###insert

Inserts an element in the heap by sifting it up

**Returns**: __ - void

**Params**:  
*   value __

    The value to insert.


###top

Peeks at the node from the top of the heap

**Returns**: __ - any The value of the node on the top.

###count

Counts the number of elements in the heap

**Returns**: __ - number the number of elements in the heap.

###isEmpty

Checks whether the heap is empty

**Returns**: __ - boolean whether the heap is empty.

###rewind

Rewind iterator back to the start (no-op)

**Returns**: __ - void

###current

Return current node pointed by the iterator

**Returns**: __ - any The current node value.

###key

Return current node index

**Returns**: __ - any The current node index.

###next

Move to the next node

**Returns**: __ - void

###valid

Check whether the heap contains more nodes

**Returns**: __ - boolean true if the heap contains any more nodes, false otherwise.

###recoverFromCorruption

Recover from the corrupted state and allow further actions on the heap.

**Returns**: __ - void

###compare

Compare elements in order to place them correctly in the heap while sifting up.

**Returns**: __ - number Result of the comparison, positive integer if value1 is greater than value2, 0 if they are equal, negative integer otherwise.
Having multiple elements with the same value in a Heap is not recommended. They will end up in an arbitrary relative position.

**Params**:  
*   first __

    The value of the first node being compared.
*   second __

    The value of the second node being compared.


###_displayNode

**Returns**: __ - String

**Params**:  
*   node __

    
*   prefix __

    
*   last __

    


###toString

Serializes the heap to string

**Returns**: __ - string   The serialized string.

#MaxHeap

The MaxHeap class provides the main functionality of a heap, keeping the maximum on the top.

**Extends**: Heap

#MinHeap

The MinHeap class provides the main functionality of a heap, keeping the minimum on the top.

**Extends**: Heap

#PriorityQueue

The PriorityQueue class provides the main functionality of an prioritized queue, implemented using a max heap.

**Extends**: Heap

#Queue

The Queue class provides the main functionality of a queue implemented using a doubly linked list.

**Extends**: DoublyLinkedList

##Methods

###enqueue

Adds an element to the queue

**Returns**: __ - void

**Params**:  
*   value __

    The value to enqueue.


###dequeue

Dequeues a node from the queue

**Returns**: __ - any  The value of the dequeued node.

#Stack

The Stack class provides the main functionality of a stack implemented using a doubly linked list.

**Extends**: DoublyLinkedList

