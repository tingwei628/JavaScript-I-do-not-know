## 物件綁定function用法

```js
  var f = function() {
    return this;
  }
  f(); // window, this指向全域
 
  // 如果this要綁定某個範圍
  
  // 解法1 此時this 指向 {'a': 2} 物件
  f.bind({ 'a': 2 })().a   // 2 
  
  // 解法2, call 或 apply 直接執行f
  f.call({ 'a': 2 }).a    // 2 
  f.apply({ 'a': 2 }).a    // 2
  
  
```
