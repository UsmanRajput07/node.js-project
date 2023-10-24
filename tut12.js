const write = require("fs").writeFileSync;
const remove = require("fs").unlinkSync;
const input = process.argv;

// if(input[2] == "add"){
//     write(input[3], input[4])
// }
// else if(input[2] == "remove"){
//     remove(input[3])
// }
// else{
//     console.log("input the valid input")
// }
console.log(process.argv)