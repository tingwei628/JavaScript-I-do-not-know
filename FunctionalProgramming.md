## Quick Note 

* Pure input, and pure output (No global!)

* currying

```js
  const pipe = (...funcs) => (your_input_value) => funcs.reduce((prev, curr) => curr(prev), your_input_value);
  const addOne = (x) => x + 1;
  const minusTwo = (y) => y - 2;
  pipe(addOne, minusTwo)(5); // 4
```


* functor and monad
  
  As it mentioned below:

  >Functors apply a function to a wrapped value:

```
  functor is like a function map(??), fa -> f(a)
  f is function; a is a wrapped value
```

## Reference
[Explantion of functional programming](https://zhuanlan.zhihu.com/p/20824527)

[Functor applicative monad](http://blog.leichunfeng.com/blog/2015/11/08/functor-applicative-and-monad/)
