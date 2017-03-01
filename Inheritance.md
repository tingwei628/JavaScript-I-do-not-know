## Prototype Chaining (原型鏈)

```js
function Super() {
  this.superbool = 'from Super';
}
Super.prototype.getSuper = function() {
  return this.superbool;
};
function Sub() {
  this.subbool = 'from Sub';
}

// Sub 繼承 Super
Sub.prototype = new Super();
Sub.prototype.getSub = function() {
   return this.subbool;
};

var p = new Sub();
console.log(p.getSuper());  // 'from Super', 透過原型鏈, p.__proto__.__proto__ = Super.prototype
console.log(p.getSub());  // 'from Sub'
console.log(Sub.prototype.__proto__ === Super.prototype); // true
```


##Reference 
- [JavaScript 高級程序設計(第3版)](https://www.tenlong.com.tw/products/9787115275790)
