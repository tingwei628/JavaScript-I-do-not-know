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

```



## 參考資料
[exports 和 module.exports 差異](https://cnodejs.org/topic/5231a630101e574521e45ef8)
