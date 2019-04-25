//find smallest missing positive integer
const A = [-1,-2,-3,0,2,3,4,5,6]
const B = [-1,-2,-3,-4]
const C = []
const D = [1,2,4,5]
const E = [-1,-2,-3,0,2,4,5]
const F = [-1,-3]

const MissingInteger = (A) => {

    if(A.length === 0){return 1}

    const list = []

    A.forEach(num => { list[num] = num });

    list[list.length] = undefined
    list[0] = 0
    let number = list.findIndex((el)=> el=== undefined)
    return number < 1 ? 1 : number
}

console.log(MissingInteger(F))

