import Stack from './Stack';

export default class LimitedStack<T> extends Stack<T> {
  private capacity: number;

  constructor (capacity: number) {
    super();
    this.capacity = capacity;
  }

  public isFull(): boolean {
    return this.store.length === this.capacity;
  }
}
