// Given an integer array nums and an integer k, return the k most 
// frequent elements. You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let hash={};
    let newArr=[];
  
    for(let i=0; i<nums.length; i++){
      // scroll through the arr and check if it's in the 
      // hashmap. if it's not in the hashmap create a key 
      // and match it with the adjacent arr. if it's in 
      // the hashmap add to the arr.
  
      let num=nums[i];
      if (!(num in hash)){
          hash[num]=[num];
      }
      else if (num in hash){
          hash[num].push(num);
      } 
    }
  
    var arrs=Object.entries(hash);
    console.log(arrs);
  
    // reverse sorts the keys by the length of the arrays.
    arrs.sort(function(a, b){
      return b[1].length - a[1].length;
    });
  
    // pushes the first values of each array inside the object.
    for ( let t=0; t<k; t++){
      newArr.push(arrs[t][0]);
    }
    
    return newArr;
  
  
  };