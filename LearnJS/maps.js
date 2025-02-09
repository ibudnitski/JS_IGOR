/*
let map = new Map();

map.set('1', 'Igor');
map.set('2', 'Andrei');
map.set('3', 'Irina');

for (const mapElement of map) {
    console.log(mapElement);
}

console.log(map.has('1')) // true
console.log(map.has('4')) // false

console.log(map.has('5'))*/

let sales = new Map([
    ['Igor', 1000],
    ['Andrei', 400],
    ['Irina', 2000],
    ['Anton', 4000]
])

console.log(sales)

/*for (const names of sales.keys()) {
    console.log(names)
}

for (const saleValue of sales.values()) {
    console.log(saleValue);
}

for (const entry of sales) {
    console.log(entry);
}*/

for (const sale of sales) {
    console.log(sale)
}

let user = {
    name: "John",
    email: "john@gmail.com",
    age: 23,
}

let userMap = new Map(Object.entries(user));

console.log(userMap)