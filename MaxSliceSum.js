const A = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
const B = [-10,-9,-8]

const maxSlice = (A) =>{
    let max = -Infinity
    let total = -Infinity

    for(number of A){
        max = Math.max(number, number + max)
        total = Math.max(total, max)
    }
    return total != -Infinity ? total : 0
}

console.log(maxSlice(B))

