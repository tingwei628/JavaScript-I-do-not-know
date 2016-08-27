### 將String 轉成 Number
```js
 var str = '5';
 +str // 5 (這時是Number) 
```
### 將Number 轉成 String
```js
var num = 5;
num + '' // '5' (這時是String)
```

### !! (雙驚嘆號的作用)
```
作用: 把 非Boolean 物件轉成Boolean
```

```js
範例: 
!!window; //Returns true
!!null; //Returns false
!!undefined; //Returns false
!!false; //Returns false
!!true; //Returns true
!!""; //Returns false
!!"Hi"; //Returns true
!!0; //Returns false
!!1; //Returns true

```

### 預設值
```js
  function(passInValue) {
    var value = passInValue || defaultValue;
  }
  // passInValue 傳進來的值
  // defaultValue 預設值
  
  // 但是 遇到 falsy value 就會出錯
  // 例如 當 passInValue = 0 或是 passInValue = "" 之類的falsy value
  var value = 0 || defaultValue; // value = defaultValue
  var value = "" || defaultValue; // value = defaultValue
  
  // 所以 不要用Falsy, 改成
  function(passInValue) {
    if (passInValue === undefined) {
      value = defaultValue;
    }
  }
  
  // 或是 用ES6 寫法
  function(value = defaultValue) {
  
  }
  
```

## 參考資料
1. [!!作用](https://www.sitepoint.com/javascript-double-negation-trick-trouble/)
2. [預設值](http://www.codereadability.com/javascript-default-parameters-with-or-operator/)
