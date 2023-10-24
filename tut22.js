const express = require("express")
const app = express();
const path = require("path")
const port = 8000;
const staticpath = path.join(__dirname,"./public" )

// remove html extension
app.get("/", (req,res)=>{
    res.sendFile(`${staticpath}/index.html`)
})
app.get("/about", (req,res)=>{
    res.sendFile(`${staticpath}/about.html`)
})
app.get("*", (req,res)=>{
    res.sendFile(`${staticpath}/404.html`)
})

app.use(express.static(staticpath))

app.get

app.listen(port , ()=>{
    console.log(`lisning to the port ${port}`)
})