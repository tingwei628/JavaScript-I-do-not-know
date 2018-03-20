## Number

###  16進位制

> 0x 開頭

例如: 
```
0x10 = 16(1*16 = 16), 
0xF0 = 240 (F=15 => 15*16=240)
```


### Unicode, UTF-8, UTF-16 

> [Unicode](https://zh.wikipedia.org/wiki/Unicode)

UTF-8: 以8bit (=1Byte)表示一個字

UTF-16: 以16bit (=2Byte)表示一個字

- 舉例: 繁體中文字 "漢" = 0x6F22 (Unicode 16進位表示)

```
6F 
22 
```

```

```

```js
"漢".charCodeAt(0); // 28450
"漢".charCodeAt(0).toString(16); // "6f22"
parseInt("漢".charCodeAt(0).toString(16),16) // 28450
//0x6F22.toString(16); // "6f22"
String.fromCharCode(parseInt(28450,10)); // 漢
String.fromCharCode(parseInt("6f22",16)); // 漢
```
