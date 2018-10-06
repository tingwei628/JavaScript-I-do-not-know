// recursive ver.
function flatten_recursive(arr) {
  if (!arr) {
    return [];
  }
  var ans = [];
  for(var i = 0; i < arr.length; i++) {
    if (typeof(arr[i]) === "number") {
      ans.push(arr[i]);
    }
    else {
      ans = ans.concat(flatten_recursive(arr[i]));
    }
  }
  return ans;
}


// iterative ver.
function flatten_iterative(arr) {
  var ans = [];
  var temp;
  while((temp = arr.shift()) !== undefined) {
    if (typeof(temp) === "number") {
     ans.push(temp);
    } else {
      arr = [].concat(temp, arr);
    }
  }
  return ans;
}

var test_case = [1, [[2,[4]],3, [5,[[[7]]]]]];

// [ 1, 2, 4, 3, 5, 7 ]

flatten_recursive(test_case);
flatten_iterative(test_case);
