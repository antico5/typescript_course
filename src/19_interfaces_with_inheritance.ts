interface Named {
  name: string
}

interface Greetable extends Named {
  greet(): void
}

class Pirate implements Greetable {
  age: number

  constructor(public name: string){
    this.age = 99
  }

  greet(): void {
    console.log("Ahoy, I'm " + this.name)
  }
}

const user1: Greetable = new Pirate('Peg Leg')
user1.greet()


export default Greetable
