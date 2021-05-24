import Queue from "./Queue";

export abstract class Animal {
  private _order!: number;
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  get order(): number {
    return this._order;
  }

  set order(order: number) {
    this._order = order;
  }

  public isOrderThan(animal: Animal): boolean {
    return this.order < animal.order;
  }
};

export class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
}

export class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }
}

export class AnimalQueue {
  dogs: Queue<Dog> = new Queue<Dog>();
  cats: Queue<Dog> = new Queue<Dog>();
  order: number = 0;

  public enqueue(animal: Animal): void {
    // Order is used as a sort of timestamp, 
    // so that we can compare the insertion order of a dog to a cat.
    animal.order = this.order;
    this.order++;

    if (animal instanceof Dog) this.dogs.add(animal);
    if (animal instanceof Cat) this.cats.add(animal);
  }

  public dequeueDog(): Dog {
    return this.dogs.remove();
  }

  public dequeueCat(): Cat {
    return this.cats.remove();
  }

  public dequeueAny(): Animal {
    if (this.dogs.size() === 0) {
      return this.dequeueCat();
    } else if (this.cats.size() === 0) {
      return this.dequeueDog();
    }

    const dog: Dog = this.dogs.peek();
    const cat: Cat = this.cats.peek();
    if (dog.isOrderThan(cat)) {
      return this.dequeueDog();
    }
    return this.dequeueCat();
  }
}
