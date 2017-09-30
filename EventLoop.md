##  Event Loop

> 事件迴圈是重複等事件, 一等到就處理, 處理完後, 再繼續等下一件未處理的事件, 直到所有事件處理完

JavaScript 本身是單執行緒, 但如何做到 非阻塞(Non-Blocking)這件事情?

ANS: Event Loop(事件迴圈) + Callback Queue

當如 setTimeout, Promise 之非同步的行為時, 會先執行同步的部分

```js

console.log("first");

setTimeout(function() {
  console.log("callback here");
}, 0);

console.log("second");

/*

<---執行console.log("first")位置stack
first
<--- setTimeout 位置會先在callback queue
<--- 執行console.log("second")位置stack
second
<---- 等到執行完後, 在執行callback queue 裡面的function 
<---- 執行
callback here

*/

```

* 另外一提, 如: Promise, Object.observer, process.nextTick 屬於microTask;
 
  setTimeInverval, setImmediate, setTimeout 屬於Tasks

一般來說, 先執行, microTasks 完後, 再執行 setTimeout

[參考](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)


### Node.JS 本身是可以實作多執行緒的, 原因是C++ 有實作執行緒池(Thread Pool)

> Node.JS = libuv + V8 engine (written in C++)

> libuv (written in C): 非同步框架


### Reference

- https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/EventLoop

