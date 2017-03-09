## Sort

```js
[1200,100,30,4].sort(); // [100, 1000, 30, 4]  WTF?
```
> 原來是把數字轉成"字串", 在轉成UTF-16 code比較

```js
console.log("1200".charCodeAt(1)); // 50
console.log("100".charCodeAt(0)); // 49
console.log("30".charCodeAt(0)); // 51
console.log("4".charCodeAt(0)); // 52

// 因為 1200的1 和 100的1 一樣, 所以比第二位
// 依照大小 49, 50 , 51, 52
// [100 1000 30 4]

```

String.fromCharCode
> UTF-16 code to String

```js
console.log(String.fromCharCode(51)); // "3"
```
