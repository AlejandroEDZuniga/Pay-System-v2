const express = require("express");
const router = express.Router();
const { Members, SuperUser } = require("../models");

router.get("/:id", (req, res, next) => {
  Members.findByPk(req.params.id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(next);
});

router.get("/", (req, res, next) => {
  SuperUser.findAll()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(next);
});

router.post("/add", (req, res, next) => {
  Members.create(req.body)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch(next);
});

router.put("/:id", (req, res, next) => {
  Members.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((data) => {
      res.status(201).json(data);
    })
    .catch(next);
});

router.delete("/:id", (req, res, next) => {
  Members.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.sendStatus(200);
    })
    .catch(next);
});

router.get("/dni/:number", (req, res, next) => {
  Members.findOne({ where: { number: req.params.number } })
    .then((data) => {
      if (data) {
        res
          .status(200)
          .json({ isMember: "True", Membership: data.status, data });
      } else {
        res.status(404).json({ isMember: "False" });
      }
    })
    .catch(next);
});

router.get("/email/:email", (req, res, next) => {
  Members.findOne({ where: { email: req.params.email } })
    .then((data) => {
      if (data) {
        res
          .status(200)
          .json({ isMember: "True", Membership: data.status, data });
      } else {
        res.status(404).json({ isMember: "False" });
      }
    })
    .catch(next);
});

module.exports = router;
