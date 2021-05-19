import LimitedStack from './LimitedStack';
/**
 * SetOfStacks uses multiple smaller stacks to hold values. New stacks are
 * created or dropped as required.
 * 
 * N = total number of stacks
 * M = capacity of each stack
 * Time: push: O(N), pop: O(N), popAt: O(N)
 * Space: push: O(N), pop: O(N), popAt: O(N)
 */
export default class SetOfStacks {
  private capacity: number;
  private stackSet: Set<LimitedStack<number>> = new Set<LimitedStack<number>>();

  constructor (capacity: number) {
    if (!capacity) throw new Error('capacity is required');
    this.capacity = capacity;
  }

  public getLastStack(): LimitedStack<number> | undefined {
    return [ ...this.stackSet ].pop();
  }

  public push(value: number): void {
    let stack = this.getLastStack();
    if (!stack || stack.isFull()) {
      stack = new LimitedStack<number>(this.capacity);
      this.stackSet.add(stack);
    }
    stack.push(value);
    return;
  }

  public pop(): number | undefined {
    let stack = this.getLastStack();
    if (!stack) return undefined;
    const value = stack.pop();
    if (!value || stack.isEmpty()) {
      this.stackSet.delete(stack);
    }
    return value;
  }

  public numberOfStacks(): number {
    return this.stackSet.size;
  }

  public isEmpty(): boolean {
    return this.numberOfStacks() === 0;
  }

  public popAt(index: number): number | undefined {
    const stack = this.getStackByIndex(index);
    if (!stack) return undefined;
    return stack.pop();
  }

  private getStackByIndex(index: number): LimitedStack<number> {
    return [ ...this.stackSet ][index];
  }
};
