const dummyData=require('./dummyData')
const result = dummyData.reduce((all, value, index, arr)=>{
    if(index+1<arr.length){
        const nextValue =  arr[index+1];
        if(nextValue - value >0){
            all.push(true)
        }else{
            all.push(false)
        }
    }
    return all;
}, [false]).filter(x=>!!x).length
console.log('result => ', result)