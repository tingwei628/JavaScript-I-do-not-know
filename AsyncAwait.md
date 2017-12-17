## Async Await 用法

- only Fetch
```js
const url = "https://www.mocky.io/v2/5a35c88e2f00006f22e25255";
const setting = {
    mode: "cors",
    method: "get",
    headers: {
        "Content-type": "application/json"
    }
};
//{"app": "person"}
function onlyFetch() {
    fetch(url, setting)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
}
onlyFetch(); // {app: "Person"}
```

- Async/Await
```js
async function fetchAsyncAwait() {
    try {
        const res = await fetch(url, setting)
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}
fetchAsyncAwait(); // {app: "Person"}
```
