import StackedQueues from '../../src/chapter03/3.4.stackedQueue';

for (const StackedQueue of StackedQueues) {
  describe(`chapter 03 - 3.4 ${StackedQueue.name}`, () => {
    let queue!: any;
    beforeEach(() => {
      queue = new StackedQueue<number>();
    });

    it('should be an instance of StackQueue', () => {
      expect(queue).toBeInstanceOf(StackedQueue);
    });

    it('can enqueue 100 elements and peek with the same value', () => {
      const seeds = Array.from({ length: 100 }, _ => Math.random() * 100);
      seeds.forEach((expected) => {
        queue.enqueue(expected);
        const actual = queue.peek();        
        expect(actual).toBe(expected);
      });
    });

    it('can enqueue 100 elements and dequeue with same order', () => {
      const seeds = Array.from({ length: 100 }, _ => Math.random() * 100);
      seeds.forEach(value => queue.enqueue(value));
      seeds.forEach(value => expect(queue.dequeue()).toBe(value));
    });
  });
}
