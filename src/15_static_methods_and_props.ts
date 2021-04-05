class Employee {
  constructor(public name: string, public age: number) {
    
  }
}

class Department {
  protected employees: Employee[] = []

  protected lastEmployee?: Employee;

  constructor(
    private readonly id: string,
    private name: string,
    private size: number
  ) {}

  static classType(): string{
    return 'Department'
  }

  describe() {
    console.log(`Department id: ${this.id}, name: ${this.name}, size: ${this.size}`);
  }

  addEmployee(employee: Employee){
    this.employees.push(employee)
    this.lastEmployee = employee
  }

  get lastEmployeeName(){
    return this.lastEmployee?.name || 'No Employee'
  }
}

class ITDepartment extends Department {
  private admins: string[] = []

  constructor(name: string, size: number) {
    super('IT', name, size)
  }

  static classType(): string {
    return 'IT - ' + super.classType()
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

console.log(it1.lastEmployeeName)
console.log(ITDepartment.classType())

export {};
