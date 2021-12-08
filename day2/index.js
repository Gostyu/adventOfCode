const data = require('./data').split("\n")

const {position, depth} = data.reduce((all, instruction)=>{
    const [direction, num] = instruction.split(" ");
    if(direction === "forward"){
        all = {...all, position : all.position+Number(num)}
    }else if(direction === "down"){
        all = {...all, depth: all.depth + Number(num)}
    }else if(direction === "up"){
        all = {...all, depth: all.depth - Number(num)}
    }
    // console.log('values => ', values)
    return all;
},{position:0, depth:0})
console.log(position * depth)