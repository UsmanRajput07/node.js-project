const express = require("express") 
const app = express();
const port = 8000;
app.get("/", (req,res)=>{
    res.send(`<label>enter the name</label>
    <input type= "text", placeholder = "enter the name"></input>
    <a href="/json">open data></a>`
    )
})
app.get("/json", (req,res)=>{
    res.send({
        name: "usman",
        course: "bca"
    })
})
app.listen(port, ()=>{
 console.log(`lisning to the port ${port}`)
})