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
講某個prototype 的function 包起來, 透過Adapter傳給其他prototype用

```js

// classB 需要用classA 的addTen function
function classA() {
  return {
    addTen: function(num) {
      return num + 10;
    }
  };
}
function Adapter() {
  var a = new classA(); // 實作classA
  return {
    newAddTen: a.addTen, // 包裝成newAddTen
  };
}
function classB(adapter, num) { // 接受Adapter
   this.adapter = adapter;
   this.num = num;
}
var b = new classB(new Adapter(), 5);
b.adapter.newAddTen(5); // 15

```

## 參考
[EssentialJSDesignPatterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#wrapperpatternjquery)
