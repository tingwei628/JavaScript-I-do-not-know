```js

__proto__: 實作的object 可以透過__proto__, 確認該上層function的prototype的屬性或方法

prototype: function 的屬性(default), 可以隨意設定屬性或方法

//
function A() {
  // constructor
}
var h = new A() // create a object
h.constructor // function A() {}
h.constructor === h.__proto__.constructor // true


(new A()).__proto__ === A.prototype // true,


// Example
function a () {};
var t = new a();
t.__proto__ === a.prototype // true
a.prototype.__proto__ === Object.prototype // true
a.prototype.__proto__.__proto__ // null
Object.prototype.__proto__ // null 物件的原型null

// 簡單繼承

function b() {
}
b.prototype = new a(); // b繼承a
var t2 = new b();
t2.__proto__ === b.prototype // true 
b.prototype.__proto__ // function a() {}

// 說明
function a() {
  this.age = 18;
  this.arr = ['you', 'me'];
}
b.prototype = new a();
var t2 = new b();
t2.age = 20;
t2.age = 20; // but t2.__proto__.age  => 18
t2.arr // follow __proto__ => ['you', 'me']
// change t2.arr[0] 改變原型
t2.arr[0] = 'change from t2';
b.prototype.arr // ['change from t2', 'me'] it has changed  改變後原型共享
var t3 = new b();
t3.arr // ['change from t2', 'me']
// But
t3.arr = ['t3me', 't3me2'];
t3.__proto__.arr // ['change from t2', 'me']

// delete t3.arr 
delete t3.arr
t3.arr // 透過.__proto__ 找 arr ['change from t2', 'me']

// 改變 原型b
b.prototype = {
  name2: 'new hi';
};
b.prototype === a.prototype // false
var t4 = new b();
t4.arr // undfined  原因是重新改寫
t4.__proto__ // {name2: 'new hi'}

a.prototype.no = '123';
var t5 = new a();
t5.__proto__.__proto__.no // 123 


// 只想共享方法 不要共享屬性
function P(name) {
  this.name = name; // constructor defined by itself
}
P.prototype.sayName = function() {
  console.log(this.name); // prototype-based method shared! 
} 
var t = new P('jay');
t.sayName() // jay

// 工廠模式
function Factory() {
 var o = {};
 o.name = name;
 o.sayName = function () { console.log(this.name);}
 return o;
}

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
