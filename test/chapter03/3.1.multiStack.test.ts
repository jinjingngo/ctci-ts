import { TripleStack } from '../../src/chapter03/3.1.multiStack';
describe(`chapter03 - 3.1 - TripleStack`, function() {
  it('can push and pop value from middle stack correctly', function() {
    const tripleStack: TripleStack = new TripleStack();
    const stack: number[] = [];
    for (let i = 1; i < 100; i += 4) {
      const val = Math.trunc(Math.random() * 999999);
      tripleStack.push(2, val);
      stack.push(val);
    }
    stack.reverse().forEach(v => expect(tripleStack.pop(2)).toBe(v));
  });

  it('can push, peek and pop values from all 3 stack correctly', function() {
    const tripleStack: TripleStack = new TripleStack();
    const stacks: Array<number[]> = [[], [], []];
    for (let j = 9; j > 0; --j) {
      for (let i = 1; i <= 3; ++i) {
        const val: number = i * 10 + j;
        tripleStack.push(i, val);
        stacks[i - 1].push(val);
        expect(tripleStack.peek(i)).toBe(val);
      }
    }

    for (let i = 1; i <= 3; ++i) {
      stacks[i - 1].reverse().forEach(v => expect(tripleStack.pop(i)).toBe(v));
      expect(tripleStack.isEmpty(i)).toBeTruthy();
    }
  });
});
