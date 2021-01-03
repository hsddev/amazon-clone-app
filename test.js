function binaryArrayToNumber(arr) {
  // your code
  for (i = 0; arr.length < 4; i++) {
    var result += arr[i] + 2;
    result++;
    return result;
  }
}

binaryArrayToNumber([0, 0, 0, 1]);
