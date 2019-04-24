const A = [3,4,4,6,1,4,4]

function solution(A,N) {
    //counters = [0,0,0,0,0]
    //create an array with length N
    let counters = Array(N).fill(0)
    let currentMax = 0 
    let lastIncrease = 0

    //iterate over A
    for (let counter of A) {       
        if (counter > N) {
            lastIncrease = currentMax;
        } else {
            let i = counter - 1
            counters[i] = Math.max(counters[i], lastIncrease)
            counters[i]++
            currentMax = Math.max(currentMax, counters[i])
        }
    }
    
    return counters.map(c => Math.max(c, lastIncrease))
}

console.log(solution(A,5))