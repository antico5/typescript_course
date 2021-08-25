type obj = Record<string, unknown>

function Areable<T extends {new(...args: any[]): {side: number}}>(constructor: T){
  return class extends constructor {
    constructor(...args: any[]){
      args[0] = args[0] + 2
      super(...args)
    }
  }
}

@Areable
class Square {
  side: number

  constructor(side: number){
    this.side = side
  }

  perimeter(): number {
    return this.side * 4
  }
}

const s = new Square(5);

console.log(s)