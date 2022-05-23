const jwt = require("jsonwebtoken");
const { SuperUser } = require("../models");

const validateToken = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  jwt.verify(token, "paysystem", (err, data) => {
    if (err) next(err);
    req.user = { id: data.id };
    next();
  });
};

const isAdmin = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, "paysystem", (err, data) => {
    if (err) next(err);

    SuperUser.findAll()
      .then((user) => {
        // if (!user.isAdmin) {
        //   return res.status(401).json({ msg: "Invalid credentials" });
        // }
        req.user = user;
        next();
      })
      .catch(next);
  });
};

module.exports = {
  validateToken,
  isAdmin,
};
