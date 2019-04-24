const A = [-5,5,-5,4]

const solution = (A) => {
    A = A.sort((a,b)=>a-b)
    let opt1 = A[0] * A[1] * A[A.length -1 ]
    let opt2 = A[A.length - 1] * A[A.length - 2] * A[A.length - 3]
    return Math.max(opt1,opt2)
}

console.log(solution(A))

