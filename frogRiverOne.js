const A = []
const X = 3

const solution = (X,A) =>{
    let river = []
    let sum = X*(X+1)/2

    for(let i = 0; i < A.length; i++){
        if(A[i] <= X){
            if(!river[A[i]]){
                river[A[i]] = true
                sum -= A[i]
                if(sum === 0){
                    return i
                }
            }
        }
    }

    return -1
}

console.log(solution(X,A))