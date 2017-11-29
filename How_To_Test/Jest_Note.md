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


### Reference

[Jest Docs@facebook](http://facebook.github.io/jest/docs/zh-Hans/api.html#content)

