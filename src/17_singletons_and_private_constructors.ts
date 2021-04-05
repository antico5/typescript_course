class Department {
  static instance?: Department

  private constructor(
    private name: string,
  ) {}

  static getInstance(): Department {
    if (this.instance) {  
      return this.instance
    } else {
      this.instance = new Department('Test')
      return this.instance
    }
  }

  describe(){
    console.log(this.name)
  }
}

Department.getInstance().describe()


export {};
