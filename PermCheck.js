A = [4,1,3,2,6]
//return 1 if permutation return 0 if not

const PermCheck = (A) => {

    const check = []

    for(let i = 0; i < A.length; i++){

        if( check[A[i]] ){
            //checks for multiple instances
            return 0
        }else{
            //stores true at the value 
            check[A[i]] = true
        }
    }

    for(let i = 1; i < check.length; i++){
            //checks for gaps
        if(!check[i]){return 0}
    }

    return 1
}

console.log(PermCheck(A))