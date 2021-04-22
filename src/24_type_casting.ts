interface Nurse {
  type: 'nurse'
  name: string
  level: number
}

interface Physician {
  type: 'physician'
  name: string
  title: string
}

type Employee = Nurse | Physician

function display(employee: Employee) {
  console.log(employee.name)
  if(employee.type == 'physician') { // instanceof only works with class instances. doesnt work with interfaces/types
    console.log(employee.title)
  }
}

const employees: Employee[] = []


employees.push({name: 'joe', title: 'doctor', type: 'physician'})
employees.push({name: 'beth', level: 2, type: 'nurse'})

const first = employees[0]
const second = employees[1]

// console.log(first.title) // Doesn't work!
// console.log(second.level) // Doesn't work!

// 1st way of casting
const cFirst = <Physician> employees[0]
console.log(cFirst.title) // Works!


// 2nd way of casting
const cSecond = employees[1] as Nurse
console.log(cSecond.level) // Works!

export {}