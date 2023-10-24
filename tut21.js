const express = require("express")
const app = express();
const path = require("path")
const port = 8000;
const staticpath = path.join(__dirname,"./public" )

app.use(express.static(staticpath))

app.listen(port , ()=>{
    console.log(`lisning to the port ${port}`)
})