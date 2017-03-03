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
Sub.prototype = new Super(); // construtor建立起來,(this.superbool = 'from Super'), 給Sub.prototype
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

(請見下圖)
```

```
            +-------------------------------------------------------------+
            |                                                             |
            |                                                             |
            v                                                             |
+-----------+-----------+                                                 |
|         Super         |                                                 |
+-----------------------+                     +------------------------+  | 
| prototype +>----------+---------+---------->|    Super Prototype     |  |
|                       |         |           +------------------------+  |
+-----------------------+         |           | constructor +>---------+--+
                                  |           |-----------+------------|
                                  |           | getSuper  |  function  |
                                  |           +------------------------+
                                  +---------------------------------------+
                                                                          |
+-----------+-----------+                     +------------------------+  |
|           Sub         |         +---------->|   Sub Prototype        |  |
+-----------------------+         |           +------------------------+  |
|     prototype +>------+---------+           |  [[ Prototype]] +>-----+--+
|                       |         |           |------------------------|
+-----------------------+         |           | superbool |'from Super'|
                                  |           +------------------------+
                                  |           | getSub    | function   |
+-----------+-----------+         |           +------------------------+
|          p            |         |
+-----------------------+         |
|  [[Prototype]] +>-----+---------+
|-----------------------|
|  subbool | 'from Sub' |                              
+-----------------------+                                
                                  
```



* 覆寫**被繼承**的方法
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
console.log(p.getSuper()); // It is Overrided by Sub
console.log(p.getSub()); // from Sub

```

> 注意: 不要Sub.prototype = {...} 寫法

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

Sub.prototype = {      // 又改寫 Sub.prototype...
  getSub: function() {
    return this.subbool;
  }
};

var p = new Sub();
console.log(p.getSuper()); // error !
```

## Prototype Chaining Problem (原型鏈的問題)

- 定義在父層的property, 會被子層的instance**共享**

```js
function Super(str) {
  this.superbool = [str];
}
Super.prototype.getSuper = function() {
  return this.superbool;
};
function Sub() {
  this.subbool = 'from Sub';
}

Sub.prototype = new Super('hi');
Sub.prototype.getSub = function() {
  return this.subbool;
};

var p = new Sub();
var p2 = new Sub();
console.log(p.getSuper()); // ['hi']
p.superbool.push('hi2');
console.log(p.getSuper()); // ['hi', 'hi2']
console.log(p2.getSuper()); // ['hi','hi2'], 因為new Super 的 this.superbool 變成Sub.prototype, 又因為prototype 共享property!
```

* Constuctor Stealing (解決上述問題)

```js
function Super() {
  this.numbers = [1,2,3];
}
Super.prototype.getSuper = function() {
  return this.numbers;
};
function Sub() {
  Super.call(this); // 純粹呼叫 Super
}

Sub.prototype = new Super();
Sub.prototype.getSub = function() {
  return this.numbers;
};

var p = new Sub();  // 每次 new , 都是呼叫 新的Super constructor
var p2 = new Sub(); // 每次 new , 都是呼叫 新的Super constructor
p.numbers.push(4);
console.log(p.getSuper()); // [1,2,3,4]
console.log(p2.getSuper()); // [1,2,3]
console.log(Object.getPrototypeOf(Sub) === Function.prototype); // true, 因為Super.call 單純Function呼叫
console.log(Object.getPrototypeOf(Sub) === Super.prototype); // false


// Pass arguments
function Super(name) {
  this.name = name;
}
Super.prototype.getName = function() {
  return this.name;
};
function Sub() {
  Super.call(this, 'SubName'); // pass arguments
}
Sub.prototype = new Super();
var p = new Sub();
console.log(p.getName()); // 'SubName'
```
> it is not good enough for reusing function

## Combination Inheritance (Pseudoclassical Inheritance)

Prototype chaining + Constructor stealing
```js


```

##Reference 
- [JavaScript 高級程序設計(第3版)](https://www.tenlong.com.tw/products/9787115275790)
