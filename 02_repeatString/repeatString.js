const repeatString = function(str, num) {
  if (num >= 1) {
    result = "";
    for (let i = 0; i < num; ++i) {
      result += str;
    }
    return result;
  } else if (num == 0) {
    return '';
  } else {
    return 'ERROR';
  }
};
//repeatString('hey', 3);
// Do not edit below this line
module.exports = repeatString;
