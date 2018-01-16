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
                      
for(let i of a)
{
   console.log(i);
   /*
      0
      1
      2
      3
      4
   */
}
```

### Fake Iterator

```js

var a1 = () => 
{
  return ({
    _i:0,
    next: function()
    {
      return this._i < 5 ? 
        {value: this._i++, done: false} : 
        {value: 'byebye', done: true};
      
    }
  });
};

var t1 = a1();
  
console.log(t.next()); //{ value: 0, done: false }
console.log(t.next()); //{ value: 1, done: false } 
console.log(t.next()); //{ value: 2, done: false } 
console.log(t.next()); //{ value: 3, done: false } 
console.log(t.next()); //{ value: 4, done: false } 
console.log(t.next()); //{ value: 'byebye', done: true }

```
> **NOTE: This is not "Iterable" because it did not have "Symbol.iterator"**

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

### Delegate the generator yield*

```js
var myIterable = function*(gen) {
  // 接受 gen 這個 generator
  yield* gen()
}
var onegen = function*()
{
  yield 1;
  yield 2;
  yield 3;
}
var t = myIterable(onegen);

t.next(); // {value: 1, done: false}
t.next(); // {value: 2, done: false}
t.next(); // {value: 3, done: false}
t.next(); // {value: undefined, done: true}
```

### Compose the multiple generators

```js
// for composing those generators
var myIterable = function*(...gens)
{
  for(let gen of gens)
  {
    yield* gg();
  }
}

var onegen = function*()
{
  yield 1;
  yield 2;
  yield 3;
}
var twogen = function*()
{
  yield 4;
  yield 5;
  yield 6;
}
var t = myIterable(onegen, twogen);
t.next(); //{value: 1, done: false}
t.next(); //{value: 2, done: false}
t.next(); //{value: 3, done: false}
t.next(); //{value: 4, done: false}
t.next(); //{value: 5, done: false}
t.next(); //{value: 6, done: false}
t.next(); //{value: undefined, done: true}
```

### Return and Next

```js
function* g()
{
  yield 1;
  yield 2;
  return 33;
}
var t = g();
t.next(); //{value: 1, done: false}
t.next(); //{value: 2, done: false}
t.next();  //{value: 33, done: true}
// t.return(111); // {value: 111, done: true}
```

### More Examples

```js
class Enumerable {
  constructor(iterator, your_initial_array) {
    //給定一個iterator
    this[Symbol.iterator] = iterator;
    if (baseObject) {
      this.initialArray = your_initial_array;
    }
  }

  // 一切都從 this
  // for(let x of this) => 就會找this[Symbol.iterator]
}
```

> 判斷 obj is Enumerable

```js
  
  //判斷obj的原型鍊是否包含 Enumerable
  if (Enumerable.prototype.isPrototypeOf(obj)) {
    return obj;
  }
  //判斷obj 是否包含Symbol.iterator
  if (obj[Symbol.iterator]()) {
    return obj[Symbol.iterator];
  }
```
### Reference

1. [Symbol.iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)
