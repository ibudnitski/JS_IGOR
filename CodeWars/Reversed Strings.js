/*
* Complete the solution so that it reverses the string passed into it.
'world'  =>  'dlrow'
'word'   =>  'drow'
* */


function solution(str){
    let results = '';
/*    if (str.length === 0){
        results = str;
    }*/
    for (let i = str.length; i >= 0 ; i--) {
        results += str.charAt(i);
    }
    return results;
}

console.log(solution('world'));
console.log(solution('hello'));
console.log(solution(''));
console.log(solution('h'));