import Stack from './Stack';

/**
 * Sort the given stack in descending order and return that.
 * 
 * Time: O(N^2)
 * Space: O(N)
 * 
 * @param {Stack<Number>} stack 
 * @returns {Stack<Number>}
 */
const sort = (stack: Stack<Number>): Stack<Number> => {
  const switcher = new Stack<Number>();
  while (!stack.isEmpty()) {
    const temp = stack.pop() as Number;
    while (!switcher.isEmpty() && switcher.peek() > temp) {
      stack.push(switcher.pop() as Number);
    }
    switcher.push(temp);
  }
  while(!switcher.isEmpty()) {
    stack.push(switcher.pop() as Number);
  }
  return stack;
}

export default sort;
