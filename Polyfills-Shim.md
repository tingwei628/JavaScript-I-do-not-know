>  Reference [What is the difference between a shim and a polyfill?@rauschma](http://2ality.com/2011/12/shim-vs-polyfill.html)

>  Reference [What is the difference between a shim and a polyfill? [closed]](https://stackoverflow.com/questions/6599815/what-is-the-difference-between-a-shim-and-a-polyfill)

### 介紹

- Shim: 一個新的library, 提供給不同環境

- Polyfill: 用來提供 **瀏覽器不支援API**的而實作的程式碼


###  比較

- Polyfill 是一種專給瀏覽器使用的Shim

- Polyfill 本身不創造額外的新的API。
舉例來說, 新的瀏覽器支援A, 但舊瀏覽器不支援, 於是開發Polyfill 讓舊瀏覽器也可以使用A
