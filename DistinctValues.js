const test = [1,1,1,2,2,2,3,4,5,7,7,7]

const DistinctValues = (A) => {
    const hash = {}
    A.forEach(el=>{
        hash[el] = hash[el] ? hash[el] + 1 : 1
    })
    return Object.keys(hash).length
}

console.log(DistinctValues(test))