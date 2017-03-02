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
console.log(p instanceof Object); // true
console.log(p instanceof Super);  // true
console.log(p instanceof Sub);    // true
```

* 覆寫 **被繼承**的方法
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

Sub.prototype = new Super();
Sub.prototype.getSub = function() {
   return this.subbool;
};
Sub.prototype.getSuper = function() { // 覆寫 繼承到getSuper方法
  return 'It is Overrided by Sub';
}
var p = new Sub();
console.log(p.getSuper());
console.log(p.getSub());

```


##Reference 
- [JavaScript 高級程序設計(第3版)](https://www.tenlong.com.tw/products/9787115275790)
