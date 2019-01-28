## Jest_Note


### Basic

```js
describe("test suite 1", () => {
  
  test("test 1", () => {
     //...
  });
  
  test("test 2", () => {
    // ...
  });


});

``` 

### Test Its Value

```js

// toBe, test best() === "grape" 
expect(best()).toBe('grape');

//toBeTruthy, test data === true
expect(data).toBeTruthy();

//toBeFalsy, test data === false
expect(data).toBeFalsy();

//toEqual, test can1 === can2
expect(can1).toEqual(can2);

//toHaveProperty, test object "house" has property "bath"
expect(house).toHaveProperty('bath');


```

### Test whether throw an error

```js
 //drink.js

function drink(flavor) {
  if (flavor === "junk")
    throw new Error("Not good");
}
function testDrink() {
  drink("junk")
}
```

```js
 // test.js
 test('throws on error', () => {
   
   // Test the exact error message
   expect(testDrink).toThrowError('Not good');
});
```


```js
describe('test xxx', () => {

  beforeEach(function () {
    jest.resetModules(); // reset import modules
    jest.resetAllMocks(); // reset all mocks
  });
  it('xxx should be ooo1', () => {
    //expect().toBe();
  });
  it('xxx should be ooo2', () => {
    //expect().toBe();
  });
});


// function errorFn() {
//   throw new SyntaxError("wow");
// }
// test THROW error
// test('this is should be an error', () => {
//   expect(errorFn).toThrow("wow");
// });

// test assigned object
// test('object assignment', () => {
//   const realData = { one: 100 };
//   realData['two'] = 100;
//   let expectedData = { one: 100, two: 100 };
//   expect(realData).toEqual(expectedData);
// });

// test string or fileName
// test('there is no I in team', () => {
//   expect('team').not.toMatch(/I/);
// });

test('zero', () => {
  const z = 0;
  const array = ['a'];
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
  expect(array).toContain('a');
});

test('call mock function', () => {
  const mockFn = jest.fn();
  mockFn();
  expect(mockFn).toBeCalled(); // test mock fn to be called
});

```

### Reference

[Jest Docs@facebook](http://facebook.github.io/jest/docs/zh-Hans/api.html#content)

