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

- UTF16
> "漢" = 0x6F22
```
6F 
22 
```


- UTF8
> "漢" UTF-8 編碼= 0xE6 0xBC 0xA2

|碼點的位數|	碼點起值|	碼點終值|	位元組序列|	Byte 1|	Byte 2|	Byte 3|	Byte 4|	Byte 5|	Byte 6|
|--------|------- |--------|---------|--------|-------|--------|-------|------|-------|
|7       |U+0000|U+007F|	1|	0xxxxxxx||||||
|11      |U+0080|	U+07FF|	2|	110xxxxx|	10xxxxxx|||||
|16|	U+0800|	U+FFFF|	3|	1110xxxx|	10xxxxxx|	10xxxxxx||||
|21|	U+10000|	U+1FFFFF|	4|	11110xxx|	10xxxxxx|	10xxxxxx|	10xxxxxx|||
|26|	U+200000|	U+3FFFFFF|	5|	111110xx|	10xxxxxx|	10xxxxxx|	10xxxxxx|	10xxxxxx||
|31|	U+4000000|	U+7FFFFFFF|	6|	1111110x|	10xxxxxx|	10xxxxxx|	10xxxxxx|	10xxxxxx|	10xxxxxx|


[原理參照](https://zh.wikipedia.org/wiki/UTF-8)
```js
parseInt(11100110,2).toString(16);//"e6"
parseInt(10111100,2).toString(16);//"bc"
parseInt(10100010,2).toString(16);//"a2"


//也可以用encodeURI()
encodeURI("漢") //"%E6%BC%A2"
```


### 轉換規則

```js
var a = "漢".charCodeAt(0); // 28450, 取得unicode, 10進位表示
"漢".charCodeAt(0).toString(16); // "6f22", 取得unicode, 16進位表示
(28450).toString(16); // "6f22", 10進位轉16進位, NOTE：數字要用括號括起來
"\u6f22"; //漢, unicode表示
parseInt("6f22",16) // 28450, 16進位轉10進位

//0x6F22.toString(16); // "6f22"


String.fromCharCode(parseInt(28450,10)); // 漢, 10進位轉換
String.fromCharCode(parseInt("6f22",16)); // 漢, 16進位轉換
```
