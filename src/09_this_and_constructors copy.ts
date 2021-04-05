class Department {
  name: string;

  constructor(name: string){
    this.name = name
  }

  describe(): void {
    console.log(`This is ${this.name}`)
  }
}

class Person {
  name: string;

  constructor(name: string){
    this.name = name
  }

  describe(this: Person): void {
    console.log(`This is ${this.name}`)
  }
}

export {};


const accounting = new Department('Accounting')
accounting.describe()
// -> this is Accounting

const accountingCopy = { describe: accounting.describe}
accountingCopy.describe()
// -> this is undefinted

const joe = new Person('Joe')
joe.describe()
// -> this is Joe

const bob = { describe: joe.describe}
// bob.describe()  // FAILS