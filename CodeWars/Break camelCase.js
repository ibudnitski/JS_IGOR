/*
* Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*
* */

function solution(string) {
    return string.split(/(?=[A-Z])/).join(' ');
}

console.log(solution("ThisIsMyLegacy"));
console.log(solution("hello"));
console.log(solution(""));