const data = require('./data')
// const dummyData=require('./dummyData')
const numbers =  data.split("\n");
// console.log('numbers => ',numbers.length)
function getSum(arr, index){
    let sum = 0
    for(let i=index; i<=index+2 && i<arr.length; i++){
            sum+=arr[i];
        
    }
    return sum;
}
const evaluations = numbers.reduce((all, value, index, arr)=>{
    if(index+1<arr.length){
        // const nextValue =  arr[index+1];
        // if(nextValue - value >0){
        //     all.push(true)
        // }else{
        //     all.push(false)
        // }
        // console.log('index => ', index)
        // console.log('value +> ', value)
        let sum1 = getSum(arr, index)
        let sum2 = getSum(arr, index+1)
        // let max = getMax(s um);
        if(sum1<sum2){
            all.push(true)
        }else{
            all.push(false)
        }
    }
    return all;
}, [false])
// console.log('evaluations => ', evaluations.length)
console.log('evaluations => ', evaluations)
console.log('evaluations => ', evaluations.filter(x=>!!x).length)