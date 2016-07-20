# Currying

[資料來源](https://medium.com/@kbrainwave/currying-in-javascript-ce6da2d324fe#.269493h63)


## Currying 是什麼

[Currying Wiki](https://zh.wikipedia.org/wiki/%E6%9F%AF%E9%87%8C%E5%8C%96)

```
 簡單來說，是把接受多個參數的函數變換成接受一個單一參數的函數，
 並且返回接受餘下的參數而且返回結果的新函數。
 
 var foo = function(a) {
  return function(b) {
    return a * a + b * b;
  }
}

```

##  Code

```

var sequence = function(start , end) {
  var r = [];
  for (var i =0; i<=end; i++) {
    r.push(i);
  }
  return r;
}

// 明顯地，sequence沒有currying，因為她有兩個參數
sequence(1, 5) //  [1, 2, 3, 4, 5]


// 建立curry 函數
var currier = function(fn) {
  var args = Array.prototype.slice.call(arguments, 1); 
  // 先把fn之外的參數切出來，並存在args
  // fn 是 sequence
  return function() {
    // 這時候的 arguments 是seq 傳進來的，不是之前的sequence的參數
    // 把 args 和 seq 的參數串起來，丟到fn.apply 使用
    return fn.apply(this, args.concat(Array.prototype.slice.call(arguments, 0)));
  };
}
var seq = currier(sequence, 1);
seq(5) // [1, 2, 3, 4, 5]


```

*下回講解Middleware*

*To be continued*

