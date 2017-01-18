##Quick Note

A Regex
```js
var re = new Regex(/abc/i);
// or
var re = /abc/i

```

- Usage of $

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

Reference

- [Regexp theory](https://aotu.io/notes/2016/11/17/regexp-theory/)
