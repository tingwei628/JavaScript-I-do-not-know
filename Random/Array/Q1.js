問題: 一個陣列裡面的物件要怎麼過濾出相同的key value?
例如: var array = [{a:1, b:1}, {a:1, b:2}, {a:2, b:1}, {a:1, b:1}];
(同時考慮 a, b的值)


var r = _.filter(_.groupBy(x, (e) => `${e.a}${e.b}`), (k) => {
  if (k.length > 1) {
   return k.map((t) => { t.re = true; return t });
  }
});
var ans = r.reduce((prev, curr) => prev.concat(curr), []);
console.log(ans); // []
