//https://leetcode.com/problems/shift-2d-grid/submissions/
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    
    let data = [];
    let n = [];
    let x = 0;
    
    
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            data.push(grid[i][j]);
            
        }
        
    }
    
    for(let i=0;i<k;i++)
        {
            data.unshift(data[data.length-1]);
            data.pop();
            
        }
    console.log(data);
    

   
    for (let l = data.length + 1; (x + grid[0].length) < l; x += grid[0].length) {
        n.push(data.slice(x, x + grid[0].length));
    }
    return (n);
};
