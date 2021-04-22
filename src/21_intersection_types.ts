type Admin = {
  name: string
  privileges: string[]
}

type Employee = {
  name: string
  startDate: Date
}

type ElevatedEmployee = Admin & Employee

const myEmp: ElevatedEmployee = {
  name: 'Joe',
  privileges: ['all'],
  startDate: new Date("2020-12-01")
}

console.log(myEmp);


export {}