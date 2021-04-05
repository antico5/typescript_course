class Employee {
  constructor(public name: string, public age: number) {
    
  }
}

abstract class Department {
  protected employees: Employee[] = []

  constructor(
    private name: string,
  ) {}

  abstract describe(): void

  addEmployee(employee: Employee){
    this.employees.push(employee)
  }
}

class ITDepartment extends Department {
  describe(){
    console.log('We are IT')
  }
}

class AccountingDepartment extends Department {
  describe(){
    console.log('We are Accounting')
  }
}

const accounting = new AccountingDepartment('Accounting 1')
const it1 = new ITDepartment("IT East");
it1.describe();
accounting.describe()

export {};