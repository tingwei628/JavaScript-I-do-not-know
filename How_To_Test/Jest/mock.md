
```js
// const onPress = jest.fn();
// expect(onPress).toBeCalledWith(
//     expect.objectContaining({
//       x: expect.any(Number),
//       y: expect.any(Number),
//     }),
//   );


const mockCallback = jest.fn();
const testFn = (a, callback) => {
  for (let i = 0; i < a; i++)
    callback();
}
testFn(3, mockCallback);
expect(mockCallback.mock.calls.length).toBe(3); // callback is called 3 times
//expect(mockCallback.mock.calls[2][0]).toBeUndefined(); 
// Third time call , first parameter should be undefined in the mockCallback

mockCallback.mockReturnOnce(10)
  .mockReturnValue('a');

mockCallback(); // 10
mockCallback(); // 'a'
mockCallback(); // 'a'

```
