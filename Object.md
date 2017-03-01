## Object特性
 - Configurable: 其property是否可被 delete, 是否可以被定義(預設true)
 - Enumerable: 其property 可被 for-in loop (預設true)
 - Writable: 其property 可被修改 (預設true)
 - Value: 其property 儲存的值 (預設undefined)


> Object.defineProperty 可以改變以上特性

```js
var obj = {};
Object.defineProperty(obj, "name", {
  configurable: false,
  writable: false,
  value: "hello"
});
console.log(obj.name); // hello
delete obj.name
console.log(obj.name); // hello 因為configurable: false

obj.name = 'wow';
console.log(obj.name); // hello 因為writable: false
```

> Object.getOwnPropertyDescriptor 得知其property的特性

```js
var obj = { name: 123 };
console.log(obj.name); // 123
Object.getOwnPropertyDescriptor(obj, 'name');
/*
{ value: 123,
  writable: true,
  enumerable: true,
  configurable: true }
*/
```

##Object 建立

* Constructor pattern 

```js
function P () {
  this.name = 'ok';
  this.myfunc = function() {
    console.log(this.name);
  }
}
var p1 = new P();
var p2 = new P();
console.log(p1 === p2); // 因為new兩個不同的物件
console.log(p1.constructor === p2.constructor); // 其constructor 指向 P

console.log(p1.name === p2.name); // true, 其值都是 'ok'
console.log(p1.myfunc === p2.myfunc); // false

```

> 為什麼 p1.myfunc === p2.myfunc // false, (這也是constructor pattern 缺點)

```js
this.myfunc = function() {} //等同于 this.myfunc = new Function() {} 
// new新的function 

/* 解決方式: 另外建立一個function 給 object 的myfunc指向 */
function P () {
  this.name = 'ok';
  this.myfunc = func1;
}
function func1() {
  console.log(this.name);
}
var p1 = new P();
var p2 = new P();
console.log(p1.myfunc === p2.myfunc); // true, 指向同一個func1
```

* Prototype pattern

> 承上 p1.myfunc === p2.myfunc 如何?

```js
function P () {}
P.prototype.name = 'ok';
P.prototype.name = function () {
    console.log(this.name);
  };

var p1 = new P();
var p2 = new P();
console.log(p1.myfunc === p2.myfunc); // true !
```

## Prototype 作用

* 其function Person()建立起來時; 同時, function 的 prototype屬性也指向 function.ProtoType

> 註: A->B (表示A指向B)

```js
function Person() {
}
Person.prototype.name = 'Jack';
Person.prototype.sayhello = function() {...}
var P1 = new Person();
var P2 = new Person(); 
// function Person.prototype -> Person Prototype
// Person Prototype 的 constructor -> function Person
```

```
            +-------------------------------------------------------------+
            |                                                             |
            |                                                             |
            v                                                             |
+-----------+-----------+                                                 |
|         Person        |                                                 |
+-----------------------+                     +------------------------+  | 
| prototype +>----------+---------+---------->|    Person Prototype    |  |
|                       |         |           +------------------------+  |
+-----------------------+         |           | constructor +>---------+--+
                                  |           |------------------------|
                                  |           | name     |  'Jack'     |
                                  |           |----------+-------------|
                                  |           | sayhello |  function   |
                                  |           +------------------------+
                                  |
                                  |
+-----------+-----------+         |           +------------------------+
|           P1          |         |           |            P2          |
+-----------------------+         |           +------------------------+
| [[Prototype]] +>------+---------+-----------+-----<+ [[ ProtoType]]  |
|                       |                     |                        |
+-----------------------+                     +------------------------+


```



##Reference 
- [JavaScript 高級程序設計(第3版)](https://www.tenlong.com.tw/products/9787115275790)