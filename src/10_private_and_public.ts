class Department {
  private name: string;
  private employees: string[] = []

  constructor(name: string){
    this.name = name
  }

  describe(): void {
    console.log(`This is ${this.name}`)
    console.log(`Employees: ${this.employees}`)
  }

  addEmployee(name: string){
    this.employees.push(name)
  }
}

const accounting = new Department('Accounting')
accounting.addEmployee('Joe')
accounting.addEmployee('Bob')
accounting.describe()

export {};
