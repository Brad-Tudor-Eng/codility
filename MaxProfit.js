const A = [23171,21011,21123,21366,21013,21367,99] //356
const B = [100,99,98,97,96,95] //0
const C = [95,96,97,98,99]  //4

const solution = (A) => {
    let max_profit = 0
    let min_day = Infinity

    for(day of A){
        min_day = Math.min(min_day, day)
        max_profit = Math.max(max_profit,day-min_day)
    }

    return max_profit
}


console.log(solution(C))
