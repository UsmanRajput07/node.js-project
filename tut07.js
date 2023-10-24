const http = require("http")
const port = 8000;
const app = http.createServer((req,res)=>{
    res.end("this is name funtion ")
})
app.listen(port, ()=>{
    console.log(`lisning to the port ${port}`)
});


