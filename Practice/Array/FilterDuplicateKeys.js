/*
 問題: 一個陣列裡面的物件要怎麼過濾出相同的key value?
 例如: var array = [{a:1, b:1}, {a:1, b:2}, {a:2, b:1}, {a:1, b:1}];
 (同時考慮 a, b的值)
*/

// _ :lodash 符號
// 依 a, b 條件 groupBy 
// filter
var r = _.filter(_.groupBy(x, (e) => `${e.a}${e.b}`), (k) => {
  if (k.length > 1) { // filter 條件
   return k.map((t) => t );
  }
});
var ans = r.reduce((prev, curr) => prev.concat(curr), []); // flatten array
console.log(ans); // [{a: 1, b: 1}, {a: 1, b: 1}]
