/*
  How to remove duplicated element in array?
   http://stackoverflow.com/questions/9229645/remove-duplicates-from-javascript-array
*/

var array = [1,1,3,4,1,6]; // 1 is duplicate element
var set = new Set(array);
var afterRemove = Array.from(set); // [1,3,4,6]

// ES6 

var afterRemove = [...s]; // [1,3,4,6]
