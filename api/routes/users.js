const express = require("express");
const router = express.Router();
const { User } = require("../models");
const { validateToken, isAdmin } = require("../middlewares");
const { Op } = require("sequelize");

router.get("/logged", validateToken, (req, res, next) => {
  User.findByPk(req.user.id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(next);
});
router.get("/home", isAdmin, (req, res, next) => {
  User.findAll()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(next);
});
//RUTAS ADMIN
//Con isAdmin verificamos que a estas rutas solo se puede acceder siendo ADMIN

//PROMOVER ADMINISTRADORES (ADMIN)
router.put("/:id/admin", (req, res, next) => {
  User.update(
    { isAdmin: true },
    {
      where: {
        id: req.params.id,
      },
      returning: true,
      plain: true,
    }
  )
    .then(([, data]) => {
      res.status(201).json(data);
    })
    .catch(next);
});
// router.post("/users/addAdmin", (req, res, next) => {
//   User.create(req.body)
//     .then((data) => {
//       res.status(201).json(data);
//     })
//     .catch(next);
// });

//DELETE USER (ADMIN)
router.delete("/:id", (req, res, next) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.sendStatus(200);
    })
    .catch(next);
});

//SEE ALL USERS (ADMIN)
router.get("/", (req, res, next) => {
  User.findAll()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(next);
});

module.exports = router;
