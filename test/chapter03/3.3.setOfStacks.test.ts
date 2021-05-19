import SetOfStacks from '../../src/chapter03/3.3.setOfStacks';

describe('chapter 03 3.3 - SetOfStacks', () => {
  let setStack: SetOfStacks;
  beforeEach(() => {
    setStack = new SetOfStacks(10);
  });

  it('should pop a undefined when stack is empty', () => {
    expect(setStack.pop()).toBeUndefined();
  });

  it('isEmpty is to be true when stack is empty', () => {
    expect(setStack.isEmpty()).toBe(true);
  });

  it('can push 100 items and pop them in order', () => {
    const seeds = Array.from({ length: 100 }, _ => Math.random() * 100);
    seeds.forEach(value => setStack.push(value));
    seeds.reverse().forEach(value => expect(setStack.pop()).toBe(value));
  });

  it('can pop from the middle stack', () => {
    const seeds = Array.from({ length: 3 }, _ => {
      return Array.from({ length: 10 }, _ => Math.random() * 100);
    });
    const feed = seeds.reduce((fold, seed) => {
      fold.push(...seed);
      return fold;
    }, []);
    feed.forEach(value => setStack.push(value));
    const [, middle] = seeds;
    middle.reverse().forEach(value => expect(setStack.popAt(1)).toBe(value));
  });
});
