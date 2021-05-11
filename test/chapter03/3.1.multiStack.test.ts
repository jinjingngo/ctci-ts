import MultiStacks from '../../src/chapter03/3.1.multiStack';
for (const Stack of MultiStacks) {
  describe(`chapter03 - 3.1 - ${Stack.name}`, () => {
    let tripleStack!: any;
    beforeEach(() => {
      tripleStack = new Stack(5);
    });
    it('can push and pop value from middle stack correctly', () => {
      const stack: number[] = [];
      for (let i = 1; i < 5; i += 1) {
        const val = Math.trunc(Math.random() * 999999);
        tripleStack.push(2, val);
        stack.push(val);
      }
      stack.reverse().forEach(v => expect(tripleStack.pop(2)).toBe(v));
    });

    it('can push, peek and pop values from all 3 stack correctly', () => {
      const stacks: Array<number[]> = [[], [], []];
      for (let j = 5; j > 0; --j) {
        for (let i = 0; i < 3; ++i) {
          const val: number = i * 10 + j;
          tripleStack.push(i, val);
          stacks[i].push(val);
          expect(tripleStack.peek(i)).toBe(val);
        }
      }

      for (let i = 0; i < 3; ++i) {
        stacks[i]
          .reverse()
          .forEach(v => expect(tripleStack.pop(i)).toBe(v));
        expect(tripleStack.isEmpty(i)).toBeTruthy();
      }
    });
  });
}
