module.exports= (req, res, next) => {
  if (!req.query.age) {
    res.send("age invalid");
  } else if (req.query.age < 18) {
    res.send("age invalid");
  } else {
    next();
  }
};
// module.exports = middile;