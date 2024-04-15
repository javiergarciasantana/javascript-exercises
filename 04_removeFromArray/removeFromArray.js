const removeFromArray = function(arr, ...nums) {
  for (const num of nums) {
    for (let i = 0; i < arr.length; ++i) {
      if (num === arr[i]) {
        arr.splice(i, 1);
      }

    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
