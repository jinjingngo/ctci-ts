import StackedQueue from '../../src/chapter03/3.4.stackedQueue';

describe('chapter 03 - 3.4 StackedQueue', () => {
  let queue!: StackedQueue<number>;
  beforeEach(() => {
    queue = new StackedQueue<number>();
  });

  it('should be an instance of StackQueue', () => {
    expect(queue).toBeInstanceOf(StackedQueue);
  })
});
