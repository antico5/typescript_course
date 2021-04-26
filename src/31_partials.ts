interface Person {
  name: string,
  age: number
}

function createPerson(name: string, age: number): Person {
  const person: Partial<Person> = {}
  person.name = name
  person.age = age
  return person as Person
}

export {}