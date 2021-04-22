interface Nurse {
  type: 'nurse'
  name: string
}

interface Physician {
  type: 'physician'
  name: string
  title: string
}

function display(employee: Nurse | Physician) {
  console.log(employee.name)
  if(employee.type == 'physician') { // instanceof only works with class instances. doesnt work with interfaces/types
    console.log(employee.title)
  }
}

display({name: 'joe', title: 'doctor', type: 'physician'})
display({name: 'beth', type: 'nurse'})

export {}