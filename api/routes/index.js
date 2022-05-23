const express = require("express");
const members = require("./members");
const auth = require("./auth");
const users = require("./users");
const test = require("./test")
const admin = require("./admin")

const router = express.Router();


router.use("/auth", auth);
router.use("/users", users);
router.use("/members", members);
router.use("/test", test)
router.use("/admin", admin)


module.exports = router;