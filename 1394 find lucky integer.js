//https://leetcode.com/problems/find-lucky-integer-in-an-array/
/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let map=new Map();
    let num=[-1];
    
    for(let i=0;i<arr.length;i++)
        {
            if(map.has(arr[i]))
                {
                    map.set(arr[i],map.get(arr[i])+1);
                }
            else
                {
                    map.set(arr[i],1);
                }
            
        }
    for(let x of map.keys())
        {
            if(x==map.get(x))
                {
                    num.push(x);
                }
            
        }
   // console.log(num);
    value=Math.max(...num);
    return value;
    
};
