function Logger(decoratorParam: string) {
  return function(constructor: any){
    console.log(`Decorating class with ${decoratorParam}`)
  }
}

@Logger('style')
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