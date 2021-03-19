/* eslint-disable @typescript-eslint/ban-types */
function add(n1: number, n2: number) {
  return n1 + n2;
}

function printNum(number: number) {
  console.log(`Result is ${number}`);
}

function addAndHandle(n1: number, n2: number, cb: (n1: number) => void) {
  const sum = n1 + n2;
  cb(sum);
}

let combine: Function;

combine = add;
combine = printNum;

let strictCombine: (n1: number, n2: number) => number;
strictCombine = add;
strictCombine = add;
// strictCombine = printNum; ! ERROR
strictCombine(1, 2);

console.log(combine(1, 2));

addAndHandle(1, 2, (sum) => {
  console.log(sum);
});

export {};
