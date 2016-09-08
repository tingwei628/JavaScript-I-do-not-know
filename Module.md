## exports 和 module.exports 差異
```js

// exports 指向module.exports 的參考
exports.hello = function() { // in app.js
  console.log('hello');
}
// 相當於
module.exports.hello = function() { // in app.js
  console.log('hello');
}

var func = require('./app.js'); // require 是 module.exports 而不是 exports
func.hello() // hello

// 注意 不要寫成這樣, 如此一來 exports 指向不是module.exports
exports = function() {
  console.log('hello'); 
}

// 除非這樣改寫
module.exports = function() {
  console.log('hello');
}
exports = module.exports; // 確保exports


// 也可以這樣寫
exports = module.exports = function() {
  console.log('hello');
}

```

## 各種module 引入方式

+ export 命名空間
```js
  // 先將命名空間 指向exports
  var yourNameSpace = exports; // in app.js
  
  var x = require('app.js'); // import your whole namespace
  
```
+ export 高階函數(High Order function) 方式
```js 
// 簡單來說, export function 裏面還有function
module.exports = function outerFunc() {  // in app.js
  return function innerFunc() {
    //...
  }
}

var q = require('app.js');
var inner = q(); // 回傳 innerFunc
inner(); // 執行innerFunc
```

+ export 建構子(Constructor)
```js
  function Person() { // in app.js
    this.name = name;
  }
  Person.prototype.getName = function() {
    return this.name;
  }
  module.exports = Person;
  
  var P = require('app.js');
  var person = new P() // 實作 Person
```



## 參考資料
+ [exports 和 module.exports 差異](https://cnodejs.org/topic/5231a630101e574521e45ef8)
+ [Export This: Interface Design Patterns for Node.js Modules](http://bites.goodeggs.com/posts/export-this/)
