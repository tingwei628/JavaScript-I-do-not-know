## Quick Note

A Regex
```js
var re = new Regex(/abc/i);
// or
var re = /abc/i

```

### Usage of $

```js
// $'  words on "b" right hand side
'abc'.replace(/b/g, "$'"); // acc

// $`  words on "b" left hand side
'abc'.replace(/b/g, "$`"); // aac

// $&  "b" itself
'abc'.replace(/b/g, "$&"); // abc

// $$ "$" itself
'abc'.replace(/b/g, "$$"); // a$c

```

### [\1 的意思](http://stackoverflow.com/questions/8624345/whats-the-meaning-of-a-number-after-a-backslash-in-a-regular-expression)

### Example

```js
/(\w)\1/g     // 表示 連續2個相同的字元

/*
  表示 連續2個相同的字元
  例如: aa 就符合
*/
```
---

```js

/([aeiouy]{2,})/g // 表示 只要包括 aeiouy 內的字元, 至少連續2個以上

/*
  表示 只要包括 aeiouy 內的字元, 至少連續2個以上
  例如: ae  就符合
*/
```
---

```js
var fileName = "ex.gyt.js";
(/.+\.js/g).test(file); // true

/*
  檢查副檔名為.js
*/

```


### Summary

> from: https://www.linuxjournal.com/content/bash-extended-globbing

```

  ?(pattern-list)   Matches zero or one occurrence of the given patterns
  *(pattern-list)   Matches zero or more occurrences of the given patterns
  +(pattern-list)   Matches one or more occurrences of the given patterns
  @(pattern-list)   Matches one of the given patterns
  !(pattern-list)   Matches anything except one of the given patterns
```

例1: 找出檔案(但排除了`.jpg`, `.gif`)

`
$ls !(*.jpg|*.gif)
`




### Reference

- [Regexp theory](https://aotu.io/notes/2016/11/17/regexp-theory/)
- [Regexp practice](https://aotu.io/notes/2016/12/07/regexp-practice/?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io)
