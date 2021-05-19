import Stack from './Stack';

export default class StackedQueue<T> {
  private stackNewest: Stack<T>; 
  private stackOldest: Stack<T>; 
  
  constructor() {
    this.stackNewest = new Stack<T>();
    this.stackOldest = new Stack<T>();
  }

  public size(): number {
    return this.stackNewest.size() + this.stackOldest.size();
  }

  public enqueue(value: T): void {
    this.stackNewest.push(value);
  }

  private shiftStacks(): void {
    if (!this.stackOldest.isEmpty()) return;
    while(!this.stackNewest.isEmpty()) {
      this.stackOldest.push(this.stackNewest.pop() as T);
    }
  }

  public peek(): T {
    this.shiftStacks();
    return this.stackOldest.peek();
  }

  public dequeue(): T {
    this.shiftStacks();
    return this.stackOldest.pop() as T;
  }
}
