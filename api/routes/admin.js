const express = require("express");
const router = express.Router();
const { SuperUser } = require("../models");
const { validateToken, isAdmin } = require("../middlewares");
const bcrypt = require("bcrypt");

router.get("/", (req, res, next) => {
  SuperUser.findAll()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(next);
});

router.post("/addAdmin", (req, res, next) => {
  User.create(req.body)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch(next);
});
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
// router.put("/:id", (req, res, next) => {
//   const userId = req.params.id;
//   const { email, password, name, id } = req.body;
//       User.update(
//         {
//           email: email,
//           name: name,
//           password: password,
//         },
//         { where: { id: userId } }
//       )
//     .then((data) => {
//       res.status(201).json(data);
//     })
//     .catch(next);
// });


router.put('/:id', (req, res) => {
  const userId = req.params.id;
  const { email,
          password,
          name, id,
          } = req.body;

      if (password != undefined) {
          bcrypt.hash(password, 10).then((hash) => {
              User.update({
                  email: email,
                  password: hash,
                  name: name,
                  id: id
              }, { where: {id: userId} });
              res.json('User updated successfully');
          })
      } else {
          User.update({
              email: email,
              name: name,
              password: password
          }, { where: {id: userId} });
          res.json('User updated successfully');
      }
});
module.exports = router;
