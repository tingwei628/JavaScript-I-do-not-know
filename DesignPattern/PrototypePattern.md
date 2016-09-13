## 原型模式

```js
var model = { // defined prototype
  pro1: 123,
  pro2: function() {
    console.log(this.pro1);
  }
}; 
function T() {};
T.prototype = model;
var a = new T();
// a__proto__ === T.prototype  (true)
a.pro2(); // 123
```
