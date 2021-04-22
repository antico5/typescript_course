interface Person {
  name: string
  age: number

  greet(): void
}

class Pirate implements Person {
  age: number

  constructor(public name: string){
    this.name = name,
    this.age = 99
  }

  greet(): void {
    console.log("Ahoy, I'm " + this.name)
  }
}

const user1: Person = new Pirate('Peg Leg')
user1.greet()


export default Person
