
const A = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

const golden_max_slice = (A) => {
    let maxEnding = A[0]
    let maxSlice = A[0]

    for(number of A){

        maxEnding = Math.max(number,maxEnding + number)
        maxSlice = Math.max(maxSlice, maxEnding)
    }

    return maxSlice
}

console.log(golden_max_slice(A))

