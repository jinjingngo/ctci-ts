class QueueNode<T> {
  private _data!: T;
  private _next!: QueueNode<T>;
  constructor(data: T) {
    this.data = data;
  }
  get data(): T {
    return this._data;
  }
  set data(value: T) {
    this._data = value;
  }
  get next(): QueueNode<T> {
    return this._next;
  }
  set next(value: QueueNode<T>) {
    this._next = value;
  }
}

export default class Queue<T> {
  private first!: QueueNode<T> | undefined;
  private last!: QueueNode<T> | undefined;
  private length: number = 0;

  public add(item: T): void {
    const t = new QueueNode<T>(item);
    this.length++;
    if (this.last) {
      this.last.next = t;
    }
    this.last = t;
    if (!this.first) {
      this.first = this.last;
    }
  }

  public remove(): T {
    if (!this.first) throw new Error('no such element expection');
    this.length--;
    const data: T = this.first.data;
    this.first = this.first.next;
    if (!this.first) {
      this.last = undefined;
    }
    return data;
  }

  public peek(): T {
    if (!this.first) throw new Error('no such element expection');
    return this.first.data;
  }

  public isEmpty(): boolean {
    return !this.first;
  }

  public size(): number {
    return this.length;
  }
}
