class Department {
  constructor(private name: string, private size: number){
  }

  describe() {
    console.log(`Department name: ${this.name}, size: ${this.size}`)
  }
}


const accounting = new Department('Accounting', 10)
accounting.describe()

export {};
