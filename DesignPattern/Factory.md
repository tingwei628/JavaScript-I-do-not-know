##工廠模式

```js
/*
  規則:
  X = totalHrs
  hrs = [0, 2, 3, 6, 8]

  區間      類型     區間長度
  0 ~ 2 => 'A'     (2 - 0 = 2)
  2 ~ 3 => 'B'     (3 - 2 = 1)
  3 ~ 6 => 'C'     (6 - 3 = 3)
  6 ~ 8 => 'D'     (8 - 6 = 2)
  8~    => 'E'     (X - 8)
  
  範例
  X = 7
  7 落在 [0, 2, 3, 6, 8]  其中 6和8的區間
  // output  
  // otT 是 factory類型
  // hrs 是 區間長度
  // inTs 是 類型
  [ { otT: 0, hrs: 2, inTs: 'A' },
  { otT: 0, hrs: 1, inTs: 'B' },
  { otT: 0, hrs: 3, inTs: 'C' },
  { otT: 0, hrs: 1, inTs: 'D' },
  { otT: 0, hrs: undefined, inTs: undefined } ]
*/
var factory = (() => {
  function OtT(t, totalHrs, hrs, inT) {
    this.otT = t;
    this.totalHrs = totalHrs;
    this.hrs = hrs;
    this.inTs = inT;
    this.getSet = (le, _temp) => {
      var _hrs = [];
      var _inTs = [];
      for (var k = 0; k < le; k++) {
          _hrs[k] = this.hrs[k + 1] - this.hrs[k];
          _inTs[k] = this.inTs[k];
      }
      if (_temp > this.hrs[le]) {
        _hrs[le] = _temp - this.hrs[le];
        _inTs[le] =  this.inTs[le];
      }
      return { _hrs: _hrs, _inTs: _inTs};
    },
    this.getInTs = () => {
      var _otT = this.otT;
      var _temp = totalHrs;
      var hrs = [];
      var inTs = [];
      var _results = [];
      var i;
      var r;
      var len = this.hrs.length;
      if (_temp >= this.hrs[len-1]) {
        r = this.getSet(len-1, totalHrs);
        hrs = r._hrs;
        inTs = r._inTs;
      } else {
        for (i = 0; i < len - 1; i++) {
          if ( _temp < this.hrs[i+1] && _temp >= this.hrs[i]) {
            break;
          }
        }
        r = this.getSet(i, totalHrs);
        hrs = r._hrs;
        inTs = r._inTs;
      }
      for (var j = 0; j < len; j++) {
        _results.push({otT: _otT, hrs: hrs[j], inTs: inTs[j]});
      }
      return _results;
    };
  }
  return (t, totalHrs, hrs, inT) => {
    return new OtT(t, totalHrs, hrs, inT);
  };
})();
var p1 = factory(0, 7, [0, 2, 3, 6, 8], ['A', 'B', 'C', 'D', 'E']);
var p2 = factory(1, 13, [0, 2, 5, 8], ['F', 'G', 'H', 'I']);
console.log('p1: \n', p1.getInTs());
console.log('p2: \n', p2.getInTs());

/*
 output
p1: 
 [ { otT: 0, hrs: 2, inTs: 'A' },
  { otT: 0, hrs: 1, inTs: 'B' },
  { otT: 0, hrs: 3, inTs: 'C' },
  { otT: 0, hrs: 1, inTs: 'D' },
  { otT: 0, hrs: undefined, inTs: undefined } ]
p2: 
 [ { otT: 1, hrs: 2, inTs: 'F' },
  { otT: 1, hrs: 3, inTs: 'G' },
  { otT: 1, hrs: 3, inTs: 'H' },
  { otT: 1, hrs: 5, inTs: 'I' } ]
*/
```
