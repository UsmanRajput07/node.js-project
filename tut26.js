const express = require("express");
const app = express();
const port = 8000;
const route = express.Router();
const middile = require("./middle");

route.use(middile);
// app.use(middile) 
route.get("/", (req, res) => {
  res.end("welcome to home page");
});
app.get("/user", (req, res) => {
  res.end("welcome to user page");
});
route.get("/about", (req, res) => {
  res.end("welcome to user page");
});
app.listen(port, () => {
  console.log(`lisning to the port ${port}`);
});
