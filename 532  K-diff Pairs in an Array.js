/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    let counter=0;
    let arr=[... new Set(nums)]
    let array=arr;
    if(k==0)
        {
            for(let k in arr)
                {
                    let index = nums.indexOf(arr[k]);
                    //console.log(k)

                if (index > -1) {
                   nums.splice(index, 1);
                }
                }
        array=[... new Set(nums)];
        console.log(array)
        
        return array.length; 
        }
   
    for(let i=0;i<array.length;i++)
        {
            for(let j=0;j<array.length;j++)
                {
                    if(i!=j)
                        {
                            
                            if(Math.abs(array[i]-array[j])==k)
                                {
                                   //console.log(`${i}+${j}`);
                                    counter++;
                                }
                            
                        }
                    
                }
        }
    
    return (counter/2);
        
    
};
