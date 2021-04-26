class Collection<T> {
  private items: T[] = []

  getItems(): T[] {
    return this.items
  }

  addItem(item: T) {
    this.items.push(item)
  }
}

const myCollection = new Collection<number>()
myCollection.addItem(1)
myCollection.addItem(3)

const myData = myCollection.getItems()


export {}