/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map=new Map();
    let value=0,max;
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
    max=map.get(nums[0]);
    value=nums[0];
    for(let x of map.keys())
        {
            if(map.get(x)>max)
                {
                    max=map.get(x);
                    value=x;
                }
            
        }
    return value;
    
};
