/*
* Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!
* */


function createPhoneNumber(numbers){
    numbers.splice(0,0,'(');
    numbers.splice(4,0,')');
    numbers.splice(5,0,' ');
    numbers.splice(9,0,'-');
    return numbers.join('');
}

let arr = [1,2,3,4,5,6,7,8,9,0];
/*arr.splice(0,0,'(');
arr.splice(4,0,')');
arr.splice(5,0,' ');
arr.splice(9,0,'-');
console.log(arr.join(''));*/

console.log(createPhoneNumber(arr));