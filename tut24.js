const express = require("express")
const app = express();
const port =8000;


app.set("view engine", "ejs")
app.get("/", (req,res)=>{
    const user = {
        name: "usman",
        email: "bca3@gmail.com",
        city: "saharanpur",
        skills:["js", "c++", "c", "node"]
    }
    res.render("index", {user})
})
app.listen(port,()=>{
    console.log(`lisning to the port ${port}`)
})