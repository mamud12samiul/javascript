var isToeplitzMatrix = function(matrix) {
    let N=matrix.length,M=matrix[1].length;
    function checkDiagonal(mat,i,j) 
    { 
        let res = mat[i][j]; 
        while (++i < N && ++j < M) 
        { 
            // mismatch found 
            if (mat[i][j] != res) 
                return false; 
        } 
   
        
        return true; 
    } 
    
    function isToepliz(mat) 
    { 
        // do for each element in first row 
        for (let i = 0; i < M; i++) 
        { 
           
            if (!checkDiagonal(mat, 0, i)) 
                return false; 
        } 
   
        for (let i = 1; i < N; i++) 
        { 
            
            if (!checkDiagonal(mat, i, 0)) 
                return false;
        return true; 
    } 
    }
    if (isToepliz(matrix)) 
        return true;
    else
        return false; 
    
};
