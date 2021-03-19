let unknownVar: unknown;
let anyVar: any;
unknownVar = 1;
unknownVar = "asd";
anyVar = "asd";

let userName: string;
userName = anyVar;
// userName = unknownVar; ! ERROR

// typechecking unknown works
if (typeof unknownVar === "string") {
  userName = unknownVar;
}

export {};
