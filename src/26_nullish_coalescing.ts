const data = JSON.parse('{"id": 123, "name": ""}')

console.log(data.id || 'No id');
console.log(data.name || 'No name');
console.log(data.title || 'No title');

console.log(data.id ?? 'No id');
console.log(data.name ?? 'No name');
console.log(data.title ?? 'No title');