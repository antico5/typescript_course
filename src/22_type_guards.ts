class Nurse {
  name = ''
}

class Physician {
  name = ''
  title = ''
}

function display(employee: Nurse | Physician) {
  console.log(employee.name)
  if(employee instanceof Physician) { // instanceof only works with class instances. doesnt work with interfaces/types
    console.log(employee.title)
  }
}

export {}