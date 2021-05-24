import { Animal, Cat, Dog, AnimalQueue } from '../../src/chapter03/3.6.animalShelter';

describe('chapter 03 - 3.6 AnimalShelter', () => {
  let queue: AnimalQueue;
  let list:  Array<Animal>;
  beforeAll(() => {
    queue = new AnimalQueue();
    list = Array.from({ length: 100 }, _ => {
      const random = Math.round(Math.random() * 100);
      const Cls = random >= 50 ? Cat : Dog;
      return new Cls(`${Cls.name}_${random}`);
    });
    list.forEach(animal => queue.enqueue(animal));
  });

  it('dequeeuAny should return the same instance holded by list', () => {
    list.forEach(animal => {
      const actual: Animal = queue.dequeueAny();
      expect(actual).toBe(animal);
    });
  });
});
