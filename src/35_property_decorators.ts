function Log(constructor: any, property: any) {
  console.log(`Decorating property: ${property}`)
}

class Product {
  title: string
  @Log
  price: number

  constructor(title: string, price: number){
    this.title=title
    this.price=price
  }
}

export {}