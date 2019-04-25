
let A = [0,1,1,0,1,1,0]

const passingCars = (A) => {
    let count = 0
    let inc = 0

    for(let i = 0; i < A.length; i++){
        A[i] === 0 ? inc++ : count += inc
        if(count > 1000000000){return -1}
    }

    return count
}

console.log(passingCars(A))