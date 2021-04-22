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

export {}