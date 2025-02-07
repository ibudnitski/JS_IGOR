let map = new Map();

map.set('1', 'Igor');
map.set('2', 'Andrei');
map.set('3', 'Irina');

for (const mapElement of map) {
    console.log(mapElement);
}

console.log(map.has('1')) // true
console.log(map.has('4')) // false