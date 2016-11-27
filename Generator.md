> ES6 系列

## Generator

```
 An iterator
```

###For Example

* case1: Object
```js
var myIterable = {}
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};

```

* case 2: Array
```js
var myIterable = [1,2,3];
var t = myIterable[Symbol.iterator]();
t.next().value; // 1
t.next().value; // 2
t.next().value; // 3
```

*  case3: Function
```js
var myIterable = function*() {
  yield 1;
  yield 2;
  yield 3;
}
var t = myIterable();
t.next().value; // 1
t.next().value; // 2
t.next().value; // 3
```


###Reference

1. [Symbol.iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)
