//https://leetcode.com/problems/check-if-n-and-its-double-exist/
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    
    
    for(let i=0;i<arr.length;i++)
        {
            for(let j=0;j<arr.length;j++)
                {
                    if(i!=j)
                        {
                            if(2*arr[j]==arr[i] || arr[j]==2*arr[i])
                                return true;
                        }
                }
            
        }
        
        return false;
    
};
