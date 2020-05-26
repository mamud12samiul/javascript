//https://leetcode.com/problems/majority-element-ii/
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map=new Map();
    let arr=[];
    
    for(let i=0;i<nums.length;i++)
        {
            if(map.has(nums[i]))
                {
                    map.set(nums[i],map.get(nums[i])+1);
                }
            else
                {
                    map.set(nums[i],1);
                }
            
        }
    for(let x of map.keys())
        {
            if(map.get(x)>(nums.length/3))
                {
                    arr.push(x)
                }
            
        }
    return arr;
    
};
