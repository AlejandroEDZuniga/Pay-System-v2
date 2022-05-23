const express = require("express");
const router = express.Router();

const Members = [
  {
    id: 1,
    name: "Fernando",
    email: "fer@fer.com",
    number: 3366,
    status: "Platinum",
  },
  {
    id: 2,
    name: "Manuel",
    email: "manuel@manu.com",
    number: 3373,
    status: "Black",
  },
  {
    id: 3,
    name: "Rodrigo",
    email: "rodrigo@rodrigo.com",
    number: 3933,
    status: "Black",
  },
];

router.get("/", (req, res, next) => {
  res.status(200).json(Members);
});

router.get("/:id", (req, res, next) => {
  const idParam = req.params.id;
  const find = Members.find((member) => member.id == idParam);
  res.status(200).json(find);
});

router.get("/dni/:number", (req, res, next) => {
  const numberParams = req.params.number;
  const data = Members.find((member) => member.number == numberParams);
  if (data) {
    res.status(200).json({ isMember: "True", Membership: data.status, data });
  } else {
    res.status(404).json({ isMember: "False" });
  }
});

router.get("/email/:email", (req, res, next) => {
  const emailParams = req.params.email;
  const data = Members.find((member) => member.email == emailParams);
  if (data) {
    res.status(200).json({ isMember: "True", Membership: data.status, data });
  } else {
    res.status(404).json({ isMember: "False" });
  }
});

module.exports = router;
