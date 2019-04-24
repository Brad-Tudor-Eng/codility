const A = [1,2,6,3,2,1,5,4,1,3]
const X = 6

const solution = (A,X) => {
    let sum = 0
    let positions = []

    let total = (X * (X+1)) / 2
    
    for(let i in A){
        //check current number
        let current = A[i]
        //check to see if the number has been visited
        //if not add it to the total
        if(!positions[current]){
            positions[current] = true
            sum += current
            if(sum === total){return +i}
        }
    }
    return -1
}


 console.log( solution(A,X) )