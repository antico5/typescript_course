function Logger(constructor: any) {
  console.log('Decorating class..')
}

@Logger
class Person {
  name = ''

  constructor(){
    console.log("Constructing");
  }
}

console.log(new Person());
console.log(new Person());
console.log(new Person());


export {}