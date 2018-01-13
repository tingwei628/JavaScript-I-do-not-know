## 1. Set

* 判斷 a 是否 b的子集(或 b 是否 a的子集)
```js
function Superset(a, b) {
  if (a.size >= b.size) {
    for (var elem of b) {
       if (!a.has(elem)) {
          return false // 非子集合
       }
    } 
  } else {
    for (var elem of a) {
       if (!b.has(elem)) {
          return false // 非子集合
       }
    } 
  }
  return a.size >= b.size ? 1 : -1; // 1 表示 b 是 a 的子集; -1 表示 a 是 b 的子集
}

var a =  new Set();
var b = new Set();

a.add(1);
a.add(3);
b.add(1);

Superset(a, b); // 1, b 是 a 的子集
```
* 算出等間距配對

```js
var d = new Set([0, 2, 6, 8]);
var k = 2; // 間距
var sum = 0;
var n = d.values();
var prev = n.next();
var curr = n.next();
for (var m = 0; m < d.size-1; m++) {
  if (curr.value - prev.value === k) {
    sum += 1;
  } 
  prev = curr;
  curr = n.next();
  if (curr.done) {
    break;
  }
}
console.log(sum); // 2,  因為 (0, 2), (6, 8) 
```
