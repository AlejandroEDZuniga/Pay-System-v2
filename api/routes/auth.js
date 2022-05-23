const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { validateToken } = require("../middlewares");
// const { SuperUser } = require("../models")
const { SuperUser } = require("../models/index")


router.post("/login", async (req, res, next) => {
  
  const { email, password } = req.body;
  

  const user = await SuperUser.findOne({ where: { email } });

  if (!user) {
    return res.status(400).json({ msg: "Usuario no encontrado" });
  }

  const validate = await user.validatePassword(password);

  if (!validate) {
    return res.status(401).json({ msg: "Invalid credentials" });
  }

  const token = jwt.sign({ id: user.id }, "paysystem");

  return res.status(200).json({ token });
});

router.get("/logout", (req, res, next) => {
  req.user = null;
  res.status(200).json({});
});


module.exports = router;
