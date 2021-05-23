import Stack from './Stack';

/**
 * Sort the given stack in ascending order and return that.
 * 
 * Time: O(N^2)
 * Space: O(N)
 * 
 * @param {Stack<Number>} stack 
 * @returns {Stack<Number>}
 */
const sort = (stack: Stack<Number>): Stack<Number> => {
  const buffer = new Stack<Number>();
  while (!stack.isEmpty()) {
    const temp = stack.pop() as Number;
    // push the greater value from buffer into stack
    // no need to check buffer.peek() >= temp, 
    // just check the greater case can save a round of stack.push();
    while (!buffer.isEmpty() && buffer.peek() > temp) {
      stack.push(buffer.pop() as Number);
    }
    // push the temp value into he right space of buffer
    buffer.push(temp);
  }
  while(!buffer.isEmpty()) {
    stack.push(buffer.pop() as Number);
  }
  return stack;
}

export default sort;
