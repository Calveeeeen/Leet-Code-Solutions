// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// Constraints:
// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let answers = [];
    
    if (nums == [0,0]){
        return nums;
    }
    else{
        for (let t=0; t<nums.length; t++){
        let product =1;
        let divisor = nums[t];

        for(let i=0; i<nums.length; i++){
            let el = nums[i];
            if(el == divisor){
                continue;
            }
            else{
                product *=el;
                console.log(product);
            }
            
        }
        answers.push(product);
        console.log(answers);
        }       
    }
    
    return answers;
};

// Attempted problem 7. unsolved. passed 7/22 test cases.