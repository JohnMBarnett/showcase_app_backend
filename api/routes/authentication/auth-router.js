const router = require("express").Router();
const bcrypt = require("bcryptjs");
const tokenBuilder = require("./token-builder");
const Users = require("../user/user-model");
const { checkCredentialsFree, checkUserExists } = require("../../middleware/user-middleware")

router.post("/register", checkCredentialsFree, (req, res) => {
  let user = req.body;

  const rounds = 3;
  const hash = bcrypt.hashSync(user.password, rounds);

  user.password = hash;

  Users.addUser(user)
    .then((newUser) => {
      res.status(200).json(newUser);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: err });
    });
});

router.post("/login", checkUserExists, (req, res, next) => {
  let { username, password } = req.body;

  Users.getUser({ username })
    .then(([user]) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = tokenBuilder(user);
        res.status(200).json({
          message: `welcome, ${user.username}`,
          token,
        });
      }
    })
    .catch((err) => {
      next({ status: 500, message: err });
    });
});

module.exports = router;