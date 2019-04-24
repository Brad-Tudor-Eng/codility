//
const A = 2
const B = 16
const K = 2


const solution = (A,B,K) => {
    if(A == 0 && B==0){
        return 1;
    } else if(A==0){
        return B/K+1;
    }
        
        return Math.ceil(B/K-(A-1)/K);
}


console.log(solution(A,B,K))