const sumAll = function(...args) {
  let result = 0;
  if (args[0] >= 0 && args[1] >= 0) { 
    if (args[1] < args[0]) {
      args = args.reverse();
    }
    for (let i = args[0]; i <= args[1]; ++i) {
      result += i;
    } 
    return result;
  } else {
    return 'ERROR';
  }
};

// Do not edit below this line
module.exports = sumAll;
