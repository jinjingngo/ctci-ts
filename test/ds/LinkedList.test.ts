import LinkedList from '../../src/ds/LinkedList';
import Node from '../../src/ds/Node';

interface Post {
  title: string
}


describe('DataStructure LinkedList', () => {
  let posts: Post[] = [];
  let linkedList: LinkedList<Post>;
  beforeEach(() => {
    posts = Array.from({ length: 100 }, (_, i) => {
      return { title: `Post ${i + 1}` }
    });
    linkedList = new LinkedList<Post>();
    posts.forEach(post => linkedList.insertAtEnd(post));
  });

  it('traverse return the same array', () => {
    const actual = linkedList.traverse();
    expect(actual).toEqual(posts);
  });

  it('contains with `Post 65`', () => {
    const expectedTitle = 'Post 65';
    const expected = { title: expectedTitle };
    const post: Node<Post> = linkedList.search(({ title }) => title === expectedTitle) as Node<Post>;
    expect(post.data).toEqual(expected);
  });
});
