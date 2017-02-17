Strict Mode

```js
"use strict";
this.a = 5;
function f(){
     console.log(this.a);
 }
f.call(this); // 5
f.call({a: 123}); // 123
f() // error, 嚴格模式下，不會自動補上this 指向全域
```


[其他例子](https://eyesofkids.gitbooks.io/javascript-start-from-es6/content/part4/arrow_function.html)
