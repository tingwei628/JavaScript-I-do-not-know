## 閉包

> [for-loop in closure](http://exploringjs.com/es6/ch_variables.html#sec_let-const-loop-heads)

### 應用

1. 區域變數可被快取

```js
var cache;
var cacheResult;
function memorize(fn) { // 記憶
  return function(arg) {
    if (cache === arg) {
      console.log('same ',cache);
      return cacheResult;
    }
    cache = arg;
    cacheResult = fn(arg);
    return cacheResult;
  }
}

(memorize(function(a) {
  return a + 2 
}))(4);
// 第一次 回傳 6


(memorize(function(a) {
  return a + 2 
}))(4); 
// 第二次 same 6 直接回傳快取結果


```

## 迴圈裡面的閉包

```js
const arr = [];
for (let i=0; i < 3; i++) {
    arr.push(() => i);
}
arr.map(x => x()); // [3,3,3], 並未依序印出來 [0,1,2] ?
```

### 有兩種方式改寫

* 用bind的方式

```js
var a = [];
for (var i=0; i < 3; i++) {
    a.push(((i_local) => i_local).bind(null, i));
}
a.map(x => x()); // [0,1,2]
```


* 使用ES6 let

```js
var ar = [];
for (let i=0; i < 3; i++) {
    ar.push(() => i);
}
ar.map(x => x()); // [0,1,2]
```
