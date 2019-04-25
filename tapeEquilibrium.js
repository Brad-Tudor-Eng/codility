const A = [-1000,1,1,1,1,1,1,1,1]

const TapeEquilibrium = (A) => {

    let sum1 = A[0]
    let sum2 = A.slice(1,A.length).reduce((col,el)=>col+el,0)

    let total = Infinity

    for(let i = 1; i < A.length; i++ ){
        total = Math.min(total,Math.abs(sum2 - sum1))
        sum1 += A[i]
        sum2 -= A[i]
    }

    return total
}

console.log(TapeEquilibrium(A))