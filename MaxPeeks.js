
const A = [1,2,3,4,3,4,1,2,3,4,6,2]

const findPeaks = (A) => {
    var peaks = [];
    
    for (var i = 1; i < n - 1; i++) {
        if (A[i - 1] < A[i] && A[i] > A[i + 1]) {
            peaks.push(i);
        }
    }
    return peaks
}

function solution(A) {
    var n = A.length;
    var peaks = findPeaks(A)

    var max = 0;
    
    for (var i = 1; i < n; i++) {
        
        if ((n % i) == 0) {
            var bi = 0;
            var block = n / i;

            for (var ind in peaks) {

            	var p = peaks[ind]
                if (bi * block <= p && p < (bi + 1) * block) {
                    bi++;
                }
            
            }

            if (bi == i) {
                max = i;
            }

        }

    }

    return max;
}

console.log(solution(A))
