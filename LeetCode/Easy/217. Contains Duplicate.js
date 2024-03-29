/**
 * https://leetcode.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const setr = new Set(nums)
  return setr.size !== nums.length;
};

console.log(containsDuplicate( [1,2,3,1] ));
console.log(containsDuplicate( [1,2,3,4] ));
console.log(containsDuplicate( [1,1,1,3,3,4,3,2,4,2] ));
