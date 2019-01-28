
# beforeAll vs. beforeEach

- beforeAll 全部 test 只會跑一次 (同一個 describe內)

- beforeEach 每跑 test 都會 跑一次(同一個describe內)

## 舉例:

```js
describe('describe', () => {

  beforeAll('beforeAll', () => console.log('beforeAll'));

  beforeEach('beforeEach', () => console.log('beforeEach'));

  test('test1', () => console.log('test1'));

  test('test2', () => console.log('test2'));

});

//describe
//beforeAll
//beforeEach
//test1
//beforeEach
//test2

```

>  beforeAll 只跑一次, 但 beforeEach 跑2次 (因為兩個 test )
