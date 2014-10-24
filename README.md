# Introduction

The Standard TypeScript Library (STL) is a collection of interfaces and classes that are meant to solve common problems.

STL provides a set of standard datastructures. They are grouped here by their underlying implementation which usually defines their general field of application.

[API Documentation can be found here](http://vovazolotoy.github.io/docs/)

# Table of Contents

* [DoublyLinkedList](#DoublyLinkedList)
* [Stack](#Stack)
* [Queue](#Queue)
* [Heap](#Heap)
* [MaxHeap](#MaxHeap)
* [MinHeap](#MinHeap)
* [PriorityQueue](#PriorityQueue)

## Doubly Linked Lists

A Doubly Linked List (DLL) is a list of nodes linked in both directions to each others. Iterator's operations, access to both ends, addition or removal of nodes have a cost of O(1) when the underlying structure is a DLL. It hence provides a decent implementation for stacks and queues.

* [DoublyLinkedList](#DoublyLinkedList)
* [Stack](#Stack)
* [Queue](#Queue)

## Heaps

Heaps are tree-like structures that follow the heap-property: each node is greater than or equal to its children, when compared using the implemented compare method which is global to the heap.

* [Heap](#Heap)
* [MaxHeap](#MaxHeap)
* [MinHeap](#MinHeap)
* [PriorityQueue](#PriorityQueue)