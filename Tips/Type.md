## Type 

> Thanks to this [nice article @Will Huang](http://blog.miniasp.com/post/2013/07/11/Front-end-Research-JavaScript-valueOf-method.aspx)


### primitive type 和 object type比較

> object type 會依照 valueOf() 或 toString() 轉型primitive type, 再來一起比較

```js
```


### valueOf() 的優先度較 toString()高 (假如都有定義)

```js
function P(age, name) {
  this.age = age;
  this.name = name;
}
P.prototype.valueOf = function() {
  return this.age + 2;
};
P.prototype.toString = function() {
  return 'ok';
};
var p1 = new P(2, 'how');
var p2 = new P(3, 'how2');

// valueOf() 的優先度較 toString()高
console.log(p1 + '1'); // "41"
console.log(p2 + '2'); // "52"
```
* 如果只定義toString()

```js
function P(age, name) {
  this.age = age;
  this.name = name;
}
P.prototype.toString = function() {
  return 'ok';
};
var p1 = new P(2, 'how');
var p2 = new P(3, 'how2');
console.log(p1 + '1'); // "ok1"
console.log(p2 + '2'); // "ok2"
```
