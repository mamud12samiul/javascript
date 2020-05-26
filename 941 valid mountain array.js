//https://leetcode.com/problems/valid-mountain-array/
/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
    let x=0,y=0,i,j;
    for(i=0;i< A.length;i++)
        {
            if(A[i]<A[i+1])
                x=1;
            else
                break;
        }
    for(j=i;j<A.length;j++)
        {
            
            if(A[j]>A[j+1])
                y=1;
            else
                break;
        }
    if(x==1 && y==1 && j==A.length-1)
        {
            return true;
        }
    else
        return false;
};
