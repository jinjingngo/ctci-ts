import Node from "./Node";

interface ILinkedList<T> {
  insertInBegin(data: T): Node<T>;
  insertAtEnd(data: T): Node<T>;
  deleteNode(node: Node<T>): void;
  traverse(): T[];
  size(): number;
  search(comparator: (data: T) => boolean): Node<T> | null;
}

export default class LinkedList<T> implements ILinkedList<T> {
  private head: Node<T> | null = null;

  /**
   * Inserting nodes in the beginning.
   * 
   * Here we are handling two scenarios:
   * 1. The list is empty - in that case, the newly added element becomes the head of the list.
   * 2. The list is not empty - in that case, the new added element becomes the head of the list,
   *    and we update the links of the former head.
   * 
   * ----------------------------------
   * 1. list before insertion:
   * A <-> B <-> ...
   * 2. list after insertion:
   * new_node <-> A <-> B <-> ...
   * ----------------------------------
   * @param {T} data 
   * @returns {Node<T>}
   */
  public insertInBegin(data: T): Node<T> {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return node;
    }
    // else logic
    this.head.prev = node;
    node.next = this.head;
    this.head = node;
    return node;
  }

  /**
   * find the last node.
   * using a recursive funciton, which traverse the list and return the node which
   * does not have a reference to the `next` node.
   * 
   * @param {Node<T>} node 
   * @returns {Node<T>}
   */
  public getLast(node: Node<T>): Node<T> {
    return node.next ? this.getLast(node.next) : node;
  }

  /**
   * inserting in the end.
   * 1. we need to find the last node.
   * 2. link the nodes
   * 
   * We have two scenarios:
   * 1. The list is empty - in that case, the newly added element becomes the head of the list.
   * 2. The list is not empty - in that case, we search for the last node and set it's `next`
   *    reference to the newly added element
   * 
   * ----------------------------------
   * A <-> B <-> new_node
   * ----------------------------------
   * 
   * @param {T} data 
   * @returns {Node<T>}
   */
  public insertAtEnd(data: T): Node<T> {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return node;
    }
    const lastNode = this.getLast(this.head);
    node.prev = lastNode;
    lastNode.next = node;
    return node;
  }

  /**
   * deleting a node is quite straightforward.
   * just need to updating the reference for the next and previous items.
   * if the node is current head, we will have to shift our list.
   * 
   * @param {Node<T>} node 
   * @returns {void}
   */
  deleteNode(node: Node<T>): void {
    if (!node.prev) {
      this.head = node.next;
      return;
    }
    const prevNode = node.prev;
    prevNode.next = node.next;
    return;
  }

  /**
   * iterate over the linked list and return all nodes as JavaScript Array.
   * @returns {T[]}
   */
  public traverse(): T[] {
    const array: T[] = [];

    if (!this.head) return array;
    
    const addToArray = (node: Node<T>): T[] => {
      array.push(node.data);
      return node.next ? addToArray(node.next) : array;
    }
    
    return addToArray(this.head as Node<T>);
  }

  /**
   * traverse the size of this linked list.
   * 
   * @returns {number}
   */
  public size(): number {
    return this.traverse().length;
  }

  /**
   * search a specific `data` in the linked list.
   * for more generic usablity, this function using the inversion of control.
   * the consumer will be able to pass a callback function, which would 
   * implement the required search condition.
   * 
   * @param {Function} comparator 
   * @returns {Node<T>|null}
   */
  search(comparator: (data: T) => boolean): Node<T> | null {
    const checkNext = (node: Node<T>): Node<T> | null => {
      if (comparator(node.data)) {
        return node;
      }
      return node.next ? checkNext(node.next) : null;
    }
    return this.head ? checkNext(this.head) : null;
  }
}
