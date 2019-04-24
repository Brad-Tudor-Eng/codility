A = [1,5,2,1,4,0]



const discs = (A) => {
    
    let j = 0
    let count = 0
    let upper = []
    let lower = []
    

    for(let i = 0; i < A.length; i++){
       upper[i] = i + A[i]
       lower[i] = i - A[i]
    }

    upper = upper.sort((a,b)=>a-b)
    lower = lower.sort((a,b)=>a-b)

    for(let i = 0; i < A.length; i++){
        while(j < A.length && upper[i] >= lower[j]){
            count += j - i
            j++
            if(count > 10000000) return -1;
        }
    }
    
    return count
}

console.log(discs(A))

