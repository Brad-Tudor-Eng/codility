//given an array determine if it can make a triangle

const Triangle = (A) => {

    const isTriangle = (a,b,c) => a+b>c && b+c>a && c+a>b
    
    A = A.sort((a,b)=>a-b)
    
    for(let i = 0; i < A.length - 2; i++){
        if(isTriangle(A[i],A[i+1],A[i+2])){return 1}
    }
    return 0
}

const A = [-3,-4,-5]

console.log(Triangle(A))