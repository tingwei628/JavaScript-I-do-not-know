```js

__proto__: 實作的object 可以透過__proto__, 確認該上層function的prototype的屬性或方法

prototype: function 的屬性(default), 可以隨意設定屬性或方法

// Example
function a () {};
var t = new a();
t.__proto__ === a.prototype // true
a.prototype.__proto__ === Object.prototype // true
a.prototype.__proto__.__proto__ // null
Object.prototype.__proto__ // null 物件的原型null


// 只想共享方法 不要共享屬性
function P(name) {
  this.name = name; // constructor defined by itself
}
P.prototype.sayName = function() {
  console.log(this.name); // prototype-based method shared! 
} 
var t = new P('jay');
t.sayName() // jay



// OOP 三大重點, Inheritance, Polymorphism, Encapsulation

// Inheritance  繼承物件
function createObject(o) { // o is {...}
  function F() {}
  F.prototype = o;
  return new F(); 
  // return F-based object 
}

// another example: child object inherites parent object
// 首先 copy parent prototype
var copyParentPrototype = createObject(parent.prototype);
child.constructor = child;
child.prototype = copyParentPrototype;

// initial constructor same as F
function B(prop) {
  F.call(this, prop);
}



// Polymorphism  可以透過不同Interface 實作
// Encapsulation 物件的屬性和方法封裝

```


##參考資料
[OOP in JavaScript](http://javascriptissexy.com/oop-in-javascript-what-you-need-to-know/)
