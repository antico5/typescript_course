function extractAndConvert<T, U extends keyof T>(obj: T, key: U): string {
  return `Value is: ${obj[key]}`
}

console.log(extractAndConvert({foo: 'bar', baz: 'qux'}, 'foo'));


export {}