export default class Stack<T> {
  private capacity: number;
  private store: T[] = [];

  constructor (capacity: number) {
    this.capacity = capacity;
  }  

  public push(value: T): void {
    this.store.push(value);
  }

  public pop(): T | undefined {
    return this.store.pop();
  }

  public peek(): T {
    return this.store[this.store.length - 1];
  }

  public isEmpty(): boolean {
    return this.store.length === 0;
  }

  public isFull(): boolean {
    return this.store.length === this.capacity;
  }
}
