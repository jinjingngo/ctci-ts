export default class Stack<T> {
  private _store: T[] = [];

  get store(): T[] {
    return this._store;
  }

  public push(value: T): void {
    this.store.push(value);
  }

  public pop(): T | undefined {
    return this.store.pop();
  }

  public peek(): T {
    return this.store[this.size() - 1];
  }

  public isEmpty(): boolean {
    return this.size() === 0;
  }

  public size(): number {
    return this.store.length;
  }

  public bottom(): T {
    return this.store[0];
  }
}
