/**
 * Question from http://www.thatjsdude.com/interview/js1.html#mergeSotedArray
 *
 * Initial Attempt:
 */

function mergeArrays(a, b) {
  var c = [];
  var ai = 0;
  var bi = 0;
  while(ai < a.length || bi < b.length) {
    if(a[ai] < b[bi]) {
      c.push(a[ai]);
      ai++;
    } else {
      c.push(b[bi]);
      bi++;
    }
  }
  return c;
}

