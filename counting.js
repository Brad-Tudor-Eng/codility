const test = [1,3,4]

const PermCheck = (A) => {
    const collector = []

    A.forEach((el)=>{
        if(collector[el]){
            collector[el] = collector[el] + 1
        }else{
            collector[el] = 1
        }
    })

    for(let i = 1; i < collector.length; i++){
        if(!collector[i] || collector[i] > 1){return -1}

    }
    return 0
}



