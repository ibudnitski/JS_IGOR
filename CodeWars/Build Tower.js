/*
*Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:
*
* */

function towerBuilder(nFloors) {
    let tower = [];
    for (let i = 0; i < nFloors; i++) {
        let spaces = " ".repeat(nFloors - i - 1);
        let stars = "*".repeat(2 * i + 1);
        tower.push(spaces + stars + spaces);
    }
    return tower;
}

// console.log(towerBuilder(6));
console.log(towerBuilder(55));

