## 閉包

### 應用

1. 區域變數可被快取

```js
var cache;
var cacheResult;
function memorize(fn) { // 記憶
  return function(arg) {
    if (cache === arg) {
      console.log('same ',cache);
      return cacheResult;
    }
    cache = arg;
    cacheResult = fn(arg);
    return cacheResult;
  }
}

(memorize(function(a) {
  return a + 2 
}))(4);
// 第一次 回傳 6


(memorize(function(a) {
  return a + 2 
}))(4); 
// 第二次 same 6 直接回傳快取結果


```
