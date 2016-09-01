## Adapter Pattern
目的: 將 Interaface 轉成另一個Interface作用

## Demo

將function 包起來給別人用 

```js
var logger = { // 把 window.console 包起來
  getLog: function() {
    return window.console;
  }, 
};
var mylogger = logger.getLog();
mylogger.log('hello'); // 'hello'

```

## 參考
[EssentialJSDesignPatterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#wrapperpatternjquery)
