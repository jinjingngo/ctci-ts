import Queue from '../../src/chapter03/Queue';

describe('chapter 3 Queue', () => {
  let queue!: Queue<number>;
  beforeEach(() => {
    queue = new Queue<number>();
  });

  it('isEmpty should be true, when nothing has been done on queue', () => {
    expect(queue.isEmpty()).toBe(true);
  });

  it('can add 100 element and remove them in same order', () => {
    const seeds = Array.from({ length: 100 }, _ => Math.random() * 100);
    seeds.forEach(value => queue.add(value));
    const [ first ] = seeds;
    expect(queue.peak()).toBe(first);
    seeds.forEach(value => expect(queue.remove()).toBe(value));
  });
});
