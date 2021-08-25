function AccessorDecorator(constructor: any, property: string, descriptor: PropertyDescriptor) {
  console.log('Accessor decorator');
  console.log(constructor)
  console.log(property)
  console.log(descriptor)
}

// Method decorator
// target = instance method ? prototype : constructor
function MethodDecorator(target: any, name: string | symbol, descriptor: PropertyDescriptor ){
  console.log('Method decorator');
  console.log(target)
  console.log(name)
  console.log(descriptor)
}


class Product {
  title: string
  private _price: number

  constructor(title: string, price: number){
    this.title=title
    this._price=price
  }

  @AccessorDecorator
  set price(val: number){
    if(val >= 0){
      this._price = val
    }
  }

  get price(): number {
    return this._price
  }

  @MethodDecorator
  getPriceWithTax(tax: number){
    return this._price * (1 + tax)
  }
}

const p = new Product('Chair', 30)
console.log(p.getPriceWithTax(0.21))

export {}