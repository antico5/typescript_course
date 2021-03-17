function addAndHandle(n1: number, n2: number, cb: (number) => void) {
  const sum = n1 + n2;
  cb(sum);
}

addAndHandle(1, 2, (sum) => {
  console.log(sum);
});

export {};
