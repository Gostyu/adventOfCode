const dummyData=require('./dummyData')
const data = require('./data')
const numbers =  data.split("\n").map(x=>Number(x));
// const numbers= dummyData

function getSum(arr, index){
    let sum = 0
    for(let i=index; i<=index+2; i++){
        if(i<arr.length){
            // console.log('arr')
            sum+=arr[i];
        }
    }
    return sum;
}
const sums = numbers.reduce((all, value, index, arr)=>{
    if(index<arr.length){
        let sum = getSum(arr, index)
        // console.log('sum => ', typeof sum)
        all.push(sum)
    }
    return all;
}, [])
console.log('sums => ', sums)
const result = sums.reduce((all, value, index, arr)=>{
    const nextValue = arr[index+1]
    if(nextValue - value >0){
        all.push(true)
    }else{
        all.push(false)
    }
    return all;
}, [false])
// console.log('result => ', result)
// console.log('evaluations => ', evaluations)
console.log('evaluations => ', result.filter(x=>!!x).length)