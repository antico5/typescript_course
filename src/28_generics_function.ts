type Obj = Record<string, unknown>
function merge<T extends Obj,U extends Obj>(obj1: T, obj2: U) {
  return Object.assign(obj1, obj2)
}

interface OpenStruct {
  [attr: string]: string
}

function funcThatUsesMerge(p1: OpenStruct, p2: OpenStruct) {
  return merge<OpenStruct, OpenStruct>(p1, p2)
}

function foo<T extends OpenStruct>(){
  return 123
}

const person = merge({name: 'dylan'}, {'age': 23})

const other = funcThatUsesMerge({name: 'joe'}, {level: "5" })

interface Lengthable {
  length: number
}

function countAndDescribe<T extends Lengthable>(obj: T): [T, string] {
  let description = "Got no values"
  if (obj.length > 0) {
    description = `Got ${obj.length} values`
  }
  return [obj, description]
}

console.log(countAndDescribe([1,2]))
console.log(countAndDescribe('Hello world'))


export {}