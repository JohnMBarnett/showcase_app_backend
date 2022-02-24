const router = require("express").Router();
const { getAllUsers, addUser, getUser } = require("./user-model");

router.get("/", (req, res, next) => {
  getAllUsers()
    .then((userArr) => {
      res.status(200).json(userArr);
    })
    .catch((err) => {
      next({ status: err.status, message: err });
    });
});

router.post("/", (req, res, next) => {
  addUser(req.body)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((err) => {
      next({ status: err.status, message: err });
    });
});

router.get("/username/:username", (req, res, next) => {
  getUser(req.params)
    .then((user) => {
      res.status(200).json(user[0]);
    })
    .catch((err) => {
      next({ status: err.status, message: err });
    });
});

module.exports = router;
