import Stack from '../../src/chapter03/Stack';
import stackSort from '../../src/chapter03/3.5.stackSort';

describe('chapter 03 - 3.5 stackSort', () => {
  let stack: Stack<Number>;
  let array: Array<Number>;

  beforeEach(() => {
    stack = new Stack<Number>();
    array = Array.from({ length: 100 }, _ => Math.random() * 100);
    array.forEach(value => {
      stack.push(value);
    });
  });

  it('pop value should be the same as the array iterator', () => {
    array.reverse().forEach(value => {
      expect(stack.pop()).toBe(value);
    });
  });

  it('orinal array should be equal with the result of stackSort', () => {
    const sorted = [ ...array ].sort((a: Number, z: Number) => <number>z - <number>a);
    const sortedStack = stackSort(stack);
    expect(sortedStack.toArray()).toEqual(sorted);
  });
});
