const express = require("express")
const app = express();
const port = 8000;

const middile =(req,res,next)=>{
if(!req.query.age){
   res.send("age invalid")
}
else if(req.query.age<18){
   res.send("age invalid")

}
else{
    next();
}
}
app.use(middile)
app.get("/", (req,res)=>{
    res.end("welcome to home page")
})
app.get("/user", (req,res)=>{
    res.end("welcome to user page")
})
app.listen(port,()=>{
    console.log(`lisning to the port ${port}`)
})