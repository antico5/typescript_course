function Log(constructor: any, property: any) {
  console.log(`Decorating property: ${property}`)
}

function Log2(constructor: any, property: string, descriptor: PropertyDescriptor) {
  console.log('Accessor decorator');
  console.log(constructor)
  console.log(property)
  console.log(descriptor)
}

class Product {
  @Log
  title: string
  private _price: number

  constructor(title: string, price: number){
    this.title=title
    this._price=price
  }

  @Log2
  set price(val: number){
    if(val >= 0){
      this._price = val
    }
  }

  get price(): number {
    return this._price
  }
}

const p = new Product('Chair', 30)

export {}