const A = [2,5,6,5,4,3]

const MinAvgTwoSlice = (A) => {

    const getAverage = (A,index,size) => {
        let sum = 0
        for(let i = index; i < index+size; i++){
            sum += A[i]
        }
        return sum / size
    }


    let minAvg = Infinity
    let avg2 = 0
    let avg = 0
    let index = 0

    for(let i = 0; i < A.length - 2; i++){
        avg2 = getAverage(A,i,3)
        avg  = getAverage(A,i,2)
        avg = Math.min(avg,avg2)
        if(avg < minAvg){
            minAvg = avg
            index = i
        }
    }

    return index
}



console.log( MinAvgTwoSlice(A) )