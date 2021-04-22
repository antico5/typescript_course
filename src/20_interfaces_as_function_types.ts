interface AddFnInt {
  (n1: number, n2: number): number
}

type AddFnType = (n1: number, n2: number) => number

const add: AddFnInt = (n1, n2) => { return n1 + n2 }
const add2: AddFnType = (n1, n2) => { return n1 + n2 }

add(1,2)
add2(1,2)

export {}
