class Employee {
  constructor(public name: string, public age: number) {
    
  }
}

class Department {
  protected employees: Employee[] = []

  constructor(
    private readonly id: string,
    private name: string,
    private size: number
  ) {}

  describe() {
    console.log(`Department id: ${this.id}, name: ${this.name}, size: ${this.size}`);
  }

  addEmployee(employee: Employee){
    this.employees.push(employee)
  }
}

class ITDepartment extends Department {
  private admins: string[] = []

  constructor(name: string, size: number) {
    super('IT', name, size)
  }

  addAdmin(name: string){
    this.admins.push(name)
  }
  
  addEmployee(employee: Employee){
    if(employee.age > 35){
      throw new Error("Employee is too old for IT")
    }
    super.addEmployee(employee)
  }

}

const accounting = new Department('Ac1', 'Accounting', 15)
const it1 = new ITDepartment("IT East", 10);
it1.describe();

accounting.addEmployee({name: 'Joe', age: 45})
it1.addEmployee({name: 'Bob', age: 35})

export {};
