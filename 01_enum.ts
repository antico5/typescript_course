enum Role {
    ADMIN,
    SALES,
    USER,
    OTHER= 99
}

const person = {
    name: 'armando',
    role: Role.OTHER
}

console.log(person)