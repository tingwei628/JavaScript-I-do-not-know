> ES6 系列

## Generator

### Introduce [Symbol.iterator] first

* Demo how to iterate functions and execute them in order!
```js
  var iterable = (...funcs) => { return {
  [Symbol.iterator]() {
    return {
      i: 0,
      next() {
        if (this.i < funcs.length) {
          return { value: funcs[this.i++](), done: false };
        }
        return { value: 'all done', done: true };
      }
    };
  }
}};

function func1() { return 1;}
function func2() { return 2;}
function func3() { return 3;}

for (i of iterable(func1, func2, func3)) {
  console.log(i);
}

/*
The result shows below:

1
2
3

*/
```

### How to make a custom iterator?
```js
> Part 1
var a = 
{
  [Symbol.iterator]:() => 
  ({
    _i: 0,
    next: function()
    {

        return this._i < 5 ? {value: this._i++, done: false} : {value: 'byebye', done: true};
      
    }
  })
};

// Sysmol.iterator is a symbol for iterator
// it can be recognized by for...of
var t = a[Symbol.iterator]();

console.log(t.next()); //{ value: 0, done: false }
console.log(t.next()); //{ value: 1, done: false } 
console.log(t.next()); //{ value: 2, done: false } 
console.log(t.next()); //{ value: 3, done: false } 
console.log(t.next()); //{ value: 4, done: false } 
console.log(t.next()); //{ value: 'byebye', done: true }
  
console.log([...a]); // [0, 1, 2, 3, 4]
                      // This is Iterable :)
                      

0
1
2
3
4



```


### Use case of "Generator"
> function* => yield

* case1: Object
```js
var myIterable = {}
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
[...myIterable] // [1,2,3]

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


### Reference

1. [Symbol.iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)
