// const { isUtf8 } = require("buffer");
const fs = require("fs")
const path = require("path")
// const dir = path.join(__dirname, "crud");
// const file = (`${dir}/apple.txt`)

// fs.writeFile("crud/ty/us.txt", "this is tut14.js", ()=>{
//   console.log("file created");
// })

// fs.readFile(`${file}`, "utf-8", (err,data)=>{
//   if(!err){
//     console.log(data)
//   }
// })

// fs.readFile("crud/ty/us.txt", "utf-8",(err,data)=>{
//   if(!err){
//     console.log(data)
//   }
// })

// fs.appendFile("crud/ty/us.txt", " this is apped fun", (err)=>{
//   if(!err){
//     console.log("appeded")
//   }
// })

// fs.rename("crud/ty/us.txt", "crud/ty/yt.txt", (err)=>{
//   if(!err){
//     console.log("reanme file successfull")
//   }
// })

fs.unlinkSync("crud/ty/yt.txt");
