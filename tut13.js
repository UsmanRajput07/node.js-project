const fs = require("fs")
const path = require("path")
const dirpath = path.join(__dirname, "./files")
console.log(dirpath)
for(let i = 0; i<5; i++){
    fs.writeFileSync(`${dirpath}/us${i}.txt`, "this is tut13.js")
}
 fs.readdir((dirpath), (err, file)=>{
     file.forEach((item)=>{
        console.log(item)
     })
 })