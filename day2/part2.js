const data = require('./data').split("\n")
// const data = require('./dummyData').split("\n")
const {position, depth} = data.reduce((all, instruction)=>{
    const [direction, x] = instruction.split(" ");
    if(direction === "forward"){
        all = {...all, position : all.position+Number(x), depth: all.depth + all.aim * Number(x)}
    }else if(direction === "down"){
        all = {...all, aim:all.aim+Number(x)}
    }else if(direction === "up"){
        all = {...all, aim:all.aim - Number(x)}
    }
    // console.log('values => ', values)
    return all;
},{position:0, depth:0, aim:0})
console.log('position => ', position)
console.log('depth => ', depth)
console.log(position * depth)