## 其他東西

 
### 1. undefined 可以賦予值
```js
function foo() {
     var undefined = 10;
     console.log(undefined);
}
foo(); // 10  竟然!
```
>undefind 只是window 下的屬性

[參考](https://segmentfault.com/a/1190000004212150)

### 2. void:[anything_you_want] return undefined

```js
void 0; // undefined
void 'anything_you_want'; // undefined
```
