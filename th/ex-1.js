const moveZeroes = function (nums) {
   for (i = 0; i < nums.length-1; i++){
    for (j = 0; j < nums.length-1-i; j++){
      if (nums[j] === 0){
         let temp = nums[j+1]
         nums[j+1] = nums[j]
         nums[j] = temp
      }
    }
   }
   return nums
}

const result1 = moveZeroes([0, 1, 0, 3, 12]);
console.log(result1); // [1,3,12,0,0]


const result2 = moveZeroes([0]);
console.log(result2); // [0]


