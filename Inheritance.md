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

## Combination Inheritance (Pseudoclassical Inheritance) (大多數使用)

Prototype chaining + Constructor stealing
```js
function Super(name) {
  this.name = name;
}
Super.prototype.getName = function() {
  console.log(this.name);
};
function Sub(name, age) {
  Super.call(this, name); // pass arguments
  this.age = age;
}
Sub.prototype = new Super();
Sub.prototype.getAge = function() {
  console.log(this.age);
};
var p1 = new Sub('A', 12);
console.log(p1.getName()); // 'A'
console.log(p1.getAge());  // 12
var p2 = new Sub('B', 15); 
console.log(p2.getName()); // 'B', 未受p1影響
console.log(p2.getAge()); // 15, 未受p1影響
```

##Prototypal Inheritance

> Douglas Crockford 提出

```js
var person = {
  friends: ['Jay', 'Dick'],
  name: 'Gray'
};

function createObject(o) {
  function F() {}
  F.prototype = o;
  return new F();
}
var p1 = createObject(person);
var p2 = createObject(person);
p1.name = 'P1';
p1.friends.push('P1');
console.log(person.friends); 
// [ 'Jay', 'Dick', 'P1' ], 
// 因為p1沒有friends, 所以直接去找上層的prototype 的 friends 屬性, 即person !!

p2.name = 'P2';
p2.friends.push('P2');
console.log(person.friends); 
// [ 'Jay', 'Dick', 'P1', 'P2' ],
// 因為p1沒有friends, 所以直接去找上層的prototype 的 friends 屬性, 即person!!

```

> Object.create() 等同上述的 createObject()

## Parasitic Combination Inheritance

* 上述的繼承方式 Super 被呼叫兩次, 沒效率
```js
function Super(name) {
  this.name = name;
}
Super.prototype.getName = function() {
  console.log(this.name);
};
function Sub(name, age) { // <----
  Super.call(this, name);
  this.age = age;
}
Sub.prototype = new Super(); // Super 被呼叫第一次 !
Sub.prototype.getAge = function() {
  console.log(this.age);
};
var p1 = new Sub(); // Super 被呼叫第二次 !
```


##Reference 
- [JavaScript 高級程序設計(第3版)](https://www.tenlong.com.tw/products/9787115275790)
