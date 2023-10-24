const http = require("http")
const port = 8000;
const data = require("./api")
const server = http.createServer((req,res)=>{
  res.writeHead(200, {"content-type": "application/json"});
  res.write(JSON.stringify(data));
  res.end();
}).listen(port);
