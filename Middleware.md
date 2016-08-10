### Middleware 是什麼? 

```
  簡單的說，介於中間，處理細節的部分。部分function 會經過middleware 本身。(其他程式語言也有應用的例子)
  
  以Node.js 來說，在處理不同request時候，到route 的之前，會先有些處理，此時function 我稱之為Middleware
```

### 如何寫一個Middleware?

以Node.js 為例

```js
  var yourMiddlware = function(req, res, next) {
  
    // do something...
    
    next(); // next 可以導到下一個middleware
  }
  
```

例如:

```js
var crossDomainMiddleware = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); // 所有response 都會加上該header
  next();
}

```

### 如何使用Middleware?

以Express.js 為例(Node.js 框架)

```js
var express = require('express');
var app = express();

app.use(yourMiddleware); // app.use 會引用該middlware

app.get('/', function(req, res, err) {
  // 此時，middlware 早已執行過...
})

```

### 其它

+ [app.use 和 middleware 的關係](http://stackoverflow.com/questions/7337572/what-does-middleware-and-app-use-actually-mean-in-expressjs)
