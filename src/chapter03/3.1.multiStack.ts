export class TripleStack {
  private stack: number[] = [];
  private lengths: number[] = [0, 0, 0];

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
