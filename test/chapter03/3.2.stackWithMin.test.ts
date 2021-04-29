import MinStacks from '../../src/chapter03/3.2.stackWithMin';

for (const key in MinStacks) {
  describe(`chapter03 - 3.2 - ${MinStacks[key].name}`, () => {
    let stack: any;
    beforeEach(() => {
      stack = new MinStacks[key]();
    });

    it('min is undefined when stack is empty', () => {
      expect(stack.isEmpty()).toBe(true);
      expect(stack.min()).toBe(undefined);
    });

    it('can push values in ascending order and min stays the same', () => {
      const value = [2, 4, 6, 8, 10, 12];
      value.forEach(v => {
        stack.push(v);
        expect(stack.min()).toBe(2);
      });

      value.reverse().forEach(v => {
        expect(stack.min()).toBe(2);
        expect(stack.pop()).toBe(v);
      });

      expect(stack.min()).toBe(undefined);
    });
  });
}
