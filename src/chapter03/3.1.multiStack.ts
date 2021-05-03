class TripleStack {
  private stack!: number[];
  private lengths!: number[];

  constructor(stackSize: number) {
    this.stack = new Array<number>(stackSize * 3);
    this.lengths = new Array<number>(3);
  }

  private getLength(stack: number): number {
    return this.lengths[stack - 1];
  }

  public push(stack: number, value: number): void {
    const index: number = this.getLength(stack) * 3 + stack - 1;
    this.stack[index] = value;
    ++this.lengths[stack - 1];
  }

  public pop(stack: number): number {
    const length: number = this.getLength(stack);
    let value!: number;
    if (length > 0) {
      const index = (length - 1) * 3 + stack - 1;
      value = this.stack[index];
      this.stack[index] = NaN;
      --this.lengths[stack - 1];
    }
    return value;
  }

  public peek(stack: number): number {
    const length: number = this.getLength(stack);
    let value!: number;
    if (length > 0) {
      const index = (length - 1) * 3 + stack - 1;
      value = this.stack[index];
    }
    return value;
  }

  public isEmpty(stack: number): boolean {
    return this.getLength(stack) === 0;
  }
}
class FixedMultiStack {
  private numberOfStacks: number = 3;
  private stackCapacity!: number;
  private values!: number[];
  private sizes!: number[];

  constructor(stackSize: number) {
    this.stackCapacity = stackSize;
    this.values = new Array<number>(stackSize * this.numberOfStacks);
    this.sizes = new Array<number>(this.numberOfStacks);
  }

  private indexOfTop(stackNum: number): number {
    const offset: number = stackNum * this.stackCapacity;
    const size = this.sizes[stackNum];
    return offset + size - 1;
  }

  public isEmpty(stackNum: number): boolean {
    return this.sizes[stackNum] === 0;
  }

  public isFull(stackNum: number): boolean {
    return this.sizes[stackNum] === this.stackCapacity;
  }

  public push(stackNum: number, value: number): boolean {
    if (this.isFull(stackNum)) return false;
    this.sizes[stackNum]++;
    this.values[this.indexOfTop(stackNum)] = value;
    return true;
  }

  public pop(stackNum: number): number | undefined {
    if (this.isEmpty(stackNum)) return undefined;
    const topIndex: number = this.indexOfTop(stackNum);
    const value: number = this.values[topIndex];
    this.values[topIndex] = 0;
    this.sizes[stackNum]--;
    return value;
  }

  public peek(stackNum: number): number | undefined {
    if (this.isEmpty(stackNum)) return undefined;
    const topIndex: number = this.indexOfTop(stackNum);
    return this.values[topIndex];
  }
}

export default [TripleStack];
