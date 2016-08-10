### Middleware 是什麼? 

```
  簡單的說，介於中間，處理細節的部分。部分function 會經過middleware 本身。(其他程式語言也有應用的例子)
```

### 起手式

以Node.js 為例

```js
  var yourMiddlware = function(req, res, next) {
  
    // do something...
    
    next(); // next 可以導到下一個middleware
  }
  
```

例如:

```js

```

### 如何使用middleware?

以Express.js 為例(Node.js 框架)

```js
var express = require('express');
var app = express();

app.use(yourMiddleware); // app.use 會引用該middlware

app.get('/', function(req, res, err) {
  // 此時，middlware 早已執行過...
})

```
