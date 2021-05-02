class NodeWithMin {
  public value!: number;
  public min: number;

  constructor(v: number, min: number) {
    this.value = v;
    this.min = min;
  }
}

class Stack<T> {
  private store: T[] = [];
  public push(val: T) {
    this.store.push(val);
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
}

class StackWithMin extends Stack<any> {
  public push(val: number) {
    const newMin = Math.min(val, this.min() || Number.MAX_VALUE);
    super.push(new NodeWithMin(val, newMin));
  }

  public pop(): number {
    return super.pop().value;
  }

  public min(): number {
    if (this.isEmpty()) {
      return Number.MAX_VALUE;
    }
    return this.peek()?.min;
  }
}

class StackWithMin2 extends Stack<number> {
  private stack: Stack<number> = new Stack<number>();

  constructor() {
    super();
  }

  public push(value: number): void {
    if (value < this.min()) {
      this.stack.push(value); // always push the min to the local stack
    }
    super.push(value);
  }

  public pop(): number {
    const value = super.pop();
    if (value === this.min()) {
      this.stack.pop();
    }
    return value as number;
  }

  public peek(): number {
    return this.stack.peek();
  }

  public min(): number {
    if (this.isEmpty()) {
      return Number.MAX_VALUE;
    }
    return this.peek();
  }
}

export default [ StackWithMin, StackWithMin2 ];
