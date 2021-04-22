const names: Array<string> = ['John']

names[0].split(' ')

const promise = new Promise<string>((resolve, reject) => {
  resolve('Done')
})

promise.then(value => {
  console.log(value)
})


// (async () => {
//   const value = await promise
// })()

