# Composable(組合)

Q: 如何不使用繼承別的物件方法, 讓物件自身可以使用別人多個方法?

A: 把多個方法抽取出來, 讓方法不屬於任何一個物件, 即是組合

* * *

```js

const cooker = () => ({
   cook: () => console.log('I can cook') 
})

const rider = () => ({
  ride: () => console.log('I can ride')
})

const flyer = () => ({
  fly: () => console.log('I can fly')
})


var obj1 = () => {
  // self defined property
  return Object.assign({}, 
    cooker(),
    rider(),
    flyer()
  );
}

var obj2 = () => {
  // self defined property
  return Object.assign({}, 
    cooker(),
    flyer()
  );
}
obj1().cook(); // I can cook!
obj2().fly(); // I can fly!

obj2().ride(); // Error! 因為沒定義


```

因此可以obj1 和 obj2 不影響, 直接取各自要的方法就好!

[參考來源](https://www.youtube.com/watch?v=wfMtDGfHWpA&index=2&list=PL0zVEGEvSaeGPBRt-y2QZ3wh64XAe40jx)
