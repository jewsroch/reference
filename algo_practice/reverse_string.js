/**
 * Question from http://www.thatjsdude.com/interview/js1.html#string_reverse
 * How would you reverse a string in JavaScript?
 */

// attempt 1
function reverseString(str) {
	var rstr = [];

	var splitStr = str.split('');

	for (i = splitStr.length -1; i >= 0; i--) {
		rstr.push(splitStr[i]);
	}

	return rstr.join('');
}

console.log(reverseString('myTest'));


// attempt 2
function reverseStringRecursive(str) {

	if (str.length <= 1) {
		return str;
	}
	var a = str.split('')
	return a.pop() + reverseStringRecursive(a.join(''));
}

// easy way w/ using built in functions
function reverseStringEasy(str) {
	return str.split('').reverse().join('');
}

// add to String primitive wrapper prototype
String.prototype.reverse = function() {
	return this.split('').reverse().join('');
}
