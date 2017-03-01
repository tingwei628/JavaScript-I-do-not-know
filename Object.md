## Object特性
 - Configurable: 其property是否可被 delete, 是否可以被定義(預設true)
 - Enumerable: 其property 可被 for-in loop (預設true)
 - Writable: 其property 可被修改 (預設true)
 - Value: 其property 儲存的值 (預設undefined)


> Object.defineProperty 可以改變以上特性

```js
var obj = {};
Object.defineProperty(obj, "name", {
  configurable: false,
  writable: false,
  value: "hello"
});
console.log(obj.name); // hello
delete obj.name
console.log(obj.name); // hello 因為configurable: false

obj.name = 'wow';
console.log(obj.name); // hello 因為writable: false
```

> Object.getOwnPropertyDescriptor 得知其property的特性

```js
var obj = { name: 123 };
console.log(obj.name); // 123
Object.getOwnPropertyDescriptor(obj, 'name');
/*
{ value: 123,
  writable: true,
  enumerable: true,
  configurable: true }
*/
```

##Object 建立

```js
function P () {
  this.name = 'ok';
  this.myfunc = function() {
    console.log(this.name);
  }
}
var p1 = new P();
var p2 = new P();
console.log(p1 === p2); // 因為new兩個不同的物件
console.log(p1.constructor === p2.constructor); // 其constructor 指向 P

console.log(p1.name === p2.name); // true, 其值都是 'ok'
console.log(p1.myfunc === p2.myfunc); // false

```

> 為什麼 p1.myfunc === p2.myfunc // false



##Reference 
- [JavaScript 高級程序設計(第3版)](https://www.tenlong.com.tw/products/9787115275790)
