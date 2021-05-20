import Stack from './Stack';

/**
 * Dequeue Expensive Algorithm Queue implemented with two stacks
 * Time: enqueue: O(1), dequeue: O(N)
 * Space: O(N)
 */
class DequeueExpensiveStackedQueue<T> {
  private actualStack: Stack<T>; 
  private tempStack: Stack<T>; 
  
  constructor() {
    this.actualStack = new Stack<T>();
    this.tempStack = new Stack<T>();
  }

  public size(): number {
    return this.actualStack.size() + this.tempStack.size();
  }

  public enqueue(value: T): void {
    this.actualStack.push(value);
  }

  private shift(fromRef: Stack<T>, toRef: Stack<T>): void {
    while(!fromRef.isEmpty()) {
      toRef.push(fromRef.pop() as T);
    } 
  }

  public peek(): T {
    this.shift(this.actualStack, this.tempStack);
    const value = this.tempStack.bottom();
    this.shift(this.tempStack, this.actualStack);

    return value;
  }

  public dequeue(): T {
    this.shift(this.actualStack, this.tempStack);
    const value = this.tempStack.pop();
    this.shift(this.tempStack, this.actualStack);
    return value as T;
  }
}

/**
 * Enqueue Expensive Queue implemented with 2 stacks
 * Time: enqueue: O(N), dequeue: O(1)
 * Space: O(N)
 */
class EequeueExpensiveStackedQueue<T> {
  private actualStack: Stack<T>;
  private tempStack: Stack<T>;

  constructor() {
    this.actualStack = new Stack<T>();
    this.tempStack = new Stack<T>();
  }

  public size(): number {
    return this.actualStack.size() + this.tempStack.size();
  }

  private shift(fromRef: Stack<T>, toRef: Stack<T>): void {
    while(!fromRef.isEmpty()) {
      toRef.push(fromRef.pop() as T);
    } 
  }

  public enqueue(value: T): void {
    this.shift(this.actualStack, this.tempStack);

    this.actualStack.push(value);

    this.shift(this.tempStack, this.actualStack);
  }

  public peek(): T {
    return this.actualStack.bottom();
  }

  public dequeue(): T {
    return this.actualStack.pop() as T;
  }
}

export default [
  DequeueExpensiveStackedQueue,
  EequeueExpensiveStackedQueue
];
