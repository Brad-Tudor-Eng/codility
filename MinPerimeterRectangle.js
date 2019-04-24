//find rectangle with minimum perimeter whose sides are factors of N
//N = 30 S=[5,6] P =5*2 + 6*2 = 22 return P

const MinPerim = (N) => {

    let low = []
    let longSide
    let shortSide

    let i = 0

    while(i * i < N){
        if(N % i === 0){
            low.push(i)
        }
        i++
    }

    i * i === N ? low.push(i) : null
    shortSide = low[low.length -1]
    longSide = N / shortSide
    return 2 * (shortSide + longSide)
}

console.log( MinPerim(36) )