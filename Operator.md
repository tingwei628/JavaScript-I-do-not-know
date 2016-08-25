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


#### [參考資料](https://www.sitepoint.com/javascript-double-negation-trick-trouble/)
