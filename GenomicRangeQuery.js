const P = [2]
const Q = [3]
const S = ""

const GenomicRangeQuery = (S, P, Q) => {
    
    const impact = {A: 1, C: 2, G: 3, T: 4 }
    const result = [ ]
    let lower,upper
    let slice = []

    for(let i = 0; i < P.length; i++){

        lower = P[i]
        upper = Q[i] + 1

        slice = S.slice(lower,upper)

        if(slice.includes("A")){result.push(impact["A"])}
        else if(slice.includes("C")){result.push(impact["C"])}
        else if(slice.includes("G")){result.push(impact["G"])}
        else if(slice.includes("T")){result.push(impact["T"])}
    }


    return result
}

console.log(GenomicRangeQuery(S,P,Q))