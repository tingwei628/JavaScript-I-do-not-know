## ES6 **class** 繼承

```js
class Base {
  constructor() {

  }
  callBase() { return "callBase"; }
}



class Extend extends Base {
  constructor() {
     // super() 相當於 Base 的 constructor
     super(); // <--- 如果要呼叫 Base 方法，一定要加 super()
  }
  callExtend() { return super.callBase(); // 呼叫 Base 方法 }
}

```







## [Prototype](https://github.com/tingwei628/JavaScript-I-do-not-know/blob/master/Object.md#prototype-特性)

## [Inheritance (繼承)](https://github.com/tingwei628/JavaScript-I-do-not-know/blob/master/Inheritance.md)

> [混合繼承(Mixin)](http://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes/) 

## Polymorphism(多型)



## Encapsulation (封裝)

Public
```js
function T() {
  this.func = function() { ... }
}
var a = new T();
a.func() // func is a public method
```

Private
```js
 function T() {
  var s = 'abc';
  function read() {
    console.log(s);
  }
 }
 var a = new T();
 a.s // undefined... s is private
 a.read(); // error... read is a private method
```

Privileged (透過public method 呼叫 封裝的private method)
```js
 function T() {
   function privateFunc() {
     return 'one';
   }
   this.service = function () {
     return privateFunc();
   }
 }
 var a = new T();
 a.service(); // one, service is a public method and call its private method
 a.privateFunc() // error...  private is a private method

```


---

#### 其他東西 

+ Overload(多載)

+ Override (覆寫)

#### 問與答


+ Q1. Object.create(A) 和 new A() 差別在哪?

  A1. [連結](http://stackoverflow.com/questions/4166616/understanding-the-difference-between-object-create-and-new-somefunction)
  >Object.create(A) 直接繼承A, 而 new A() 則是繼承A.prototype
  
