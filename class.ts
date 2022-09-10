class Animal {
  private name: string;
  private height: number;
  private weight: number;
  private sound: string;

  public setName(newName: string): void {
    this.name = newName;
  }

  public getName(): string {
    return this.name;
  }

  public setWeight(newWeight: number): void {
    if (newWeight > 0) {
      this.weight = newWeight;
      return;
    }

    console.log(`Weight must be bigger than 0`);
  }

  public getWeight(): string {
    return this.name;
  }

  public setSound(sound: string): void {
    this.sound = sound;
  }

  public getSound(): string {
    return this.sound;
  }
}

class Dog extends Animal {
  constructor() {
    super();

    this.setSound("bark");
  }

  public digHole(): void {
    console.log(`Dig a hole`);
  }

  public changeVar(randNum: number): void {
    randNum = 12;

    console.log(`randNum in method: ${randNum}`);
  }
}

class Cat extends Animal {
  constructor() {
    super();

    this.setSound("meow");
  }
}

class WorkWithAnimals {
  private justANum: 10;

  public static main(): void {
    const fido = new Dog();

    fido.setName("Fido");
    console.log(fido.getName());

    fido.setWeight(-1);

    // const randNum = 10;

    // fido.changeVar(randNum);

    // console.log()

    const doggy = new Dog();
    const kitty = new Cat();

    console.log(`Doggy says: ${doggy.getSound()}`);
    console.log(`Kitty says: ${kitty.getSound()}`);

    let animals: Animal[] = [];
    animals[0] = doggy;
    animals[1] = kitty;

    console.log(`Doggy says: ${animals[0].getSound()}`);
    console.log(`Kitty says: ${animals[1].getSound()}`);

    this.speakAnimal(doggy);
  }

  public static speakAnimal(randAnimal: Animal): void {
    console.log(`Animal says: ${randAnimal.getSound()}`);
  }
}

WorkWithAnimals.main();
