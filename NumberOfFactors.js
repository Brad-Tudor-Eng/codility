const A = 12    //answer is 8
//1,2,3,4,6,8,12,24

const numberOfFactors = (A) => {
    let i = 0
    let result = 0

    while(i * i < A){
        A % i === 0 ? result += 2 : null
        i++
    }
    
    i * i === A && result++

    return result
}

console.log(numberOfFactors(A))