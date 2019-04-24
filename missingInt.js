//return smallest positive intiger in an array
const A = [-1,-2,-3,-5]

const solution = (A) => {

    //edge case
    if(A.length < 2 && A[0] !== 1){return 1}
    let allNegitive = false

    const B = []

    for(let number of A){
        B[number] = true
        if(number > 0){allNegitive = true}
    }
    
    if(!allNegitive){return 1}

    let index = B.slice(1,B.length).findIndex((a)=> a !== true) + 1
    return index === 0 ? B.length : index
}

console.log(solution(A))