function add(n1: number, n2: number) {
  return n1 + n2;
}

function addAsString(n1: number, n2: number) {
  return n1.toString() + n2.toString();
}

function printNum(number: number) {
  console.log(`Result is ${number}`);
}

console.log(add(1, 2));
console.log(addAsString(1, 2));
const result = printNum(123);

export {};
