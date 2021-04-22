interface ErrorContainer {
  [attribute: string]: string // Any amount of properties
}

const userErrors: ErrorContainer = {
  email: 'Already taken',
  name: 'Must be present'
}

console.log(userErrors);

