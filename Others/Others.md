## 其他東西

 
### 1. undefined 可以賦予值
```js
function foo() {
     var undefined = 10;
     console.log(undefined);
}
foo(); // 10  竟然!
```
>undefind 只是window 下的屬性

[參考](https://segmentfault.com/a/1190000004212150)

### 2. void:[anything_you_want] return undefined

```js
void 0; // undefined
void 'anything_you_want'; // undefined
```

### 3. reverse array with reduceRight

```js
function reverse(arr) {
  return arr.reduceRight(function(prev, curr) {
    return prev.concat(curr)
  }, []);
}
reverse([1,2,3]); // [3,2,1]
```
### 4. ~ 和 ~~ 的用法

~
```js
// ~x 相當於 -(x+1)
~1 // -2, 數字 -2
~false // -1, 因為falsy 值 = 0, -(0+1) = -1
~2.9 // -3, 浮點數, 2.9 直接去掉 0.9 變成2, 帶入-(2+1) = -3
```

~~
```js
// ~~ x 相當於 -((-(x+1))+1)
// 特別的是
~~2.9 // 2, 對浮點數而言 相當於是Math.floor(無條件捨去)效果

```
