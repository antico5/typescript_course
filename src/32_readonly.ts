const names = ['Joe','Kevin']
names.push('Dylan')

const readOnlyNames: Readonly<string[]> = ['Joe','Kevin']
// readOnlyNames.push('Dylan')  // fails!

export {}