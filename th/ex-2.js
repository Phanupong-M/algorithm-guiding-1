const romanToInt = function (s) {
  const romanNumber = {I: 1, V:5, X:10, L: 50, C: 100, D: 500, M: 1000}
  let cur_value = 0
  let prev_value = 0
  let sum = 0

    for (i = s.length-1; i >= 0; i--){
        cur_value = romanNumber[s[i]]

        if (cur_value < prev_value) {
          sum -= cur_value
        } else{
          sum += cur_value
        }
    prev_value = cur_value
  }

  return sum
}

const result1 = romanToInt("III"); // 3
console.log(result1);

const result2 = romanToInt("LVIII"); // 58
console.log(result2);

const result3 = romanToInt("MCMXCIV"); //1994
console.log(result3);


