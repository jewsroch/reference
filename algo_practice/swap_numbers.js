/**
 * Question from http://www.thatjsdude.com/interview/js1.html#swapTemp
 * How would you swap two numbers without using a temporary variable?
 * Initial Attempt:
 */

function swapNumb(a, b){
  console.log('before swap: ','a: ', a, 'b: ', b);
  b = b -a;
  console.log('after step1: ','a: ', a, 'b: ', b);
  a = a+ b;
  console.log('after step2: ','a: ', a, 'b: ', b);
  b = a-b;
  console.log('after swap: ','a: ', a, 'b: ', b);
}
