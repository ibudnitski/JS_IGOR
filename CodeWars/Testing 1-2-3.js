/*
* Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
*
* */

var number=function(array){
/*    if(array.length === 0){
        return [];
    }else {
        let number = 0;
        let arr2 = [];
        array.forEach(x=>{
            arr2.push(number + 1 + ": " + x);
            number++;
        })
        return arr2;
    }*/
    let number = 0;
    return array.map(num => `${number + 1}: ${num}`);
}

console.log(number(['a','b','c','d']));
console.log(number([]));