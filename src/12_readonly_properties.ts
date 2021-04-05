class Department {
  constructor(
    private readonly id: number,
    private name: string,
    private size: number
  ) {}

  describe() {
    console.log(`Department id: ${this.id}, name: ${this.name}, size: ${this.size}`);
  }
}

const accounting = new Department(123, "Accounting", 10);
accounting.describe();

export {};
