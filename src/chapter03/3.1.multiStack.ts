class FixedMultiStack {
  private numberOfStacks: number = 3;
  private stackCapacity!: number;
  private values!: number[];
  private sizes!: number[];

  constructor(stackSize: number) {
    this.stackCapacity = stackSize;
    this.values = new Array<number>(stackSize * this.numberOfStacks);
    this.sizes = Array.from({ length: this.numberOfStacks }, _ => 0)//new Array<number>(this.numberOfStacks);
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

export default [FixedMultiStack];
