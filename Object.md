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

##Reference 
- [JavaScript 高級程序設計(第3版)](https://www.tenlong.com.tw/products/9787115275790)
