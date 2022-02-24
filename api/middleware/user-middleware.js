const Users = require("../routes/user/user-model");
const bcrypt = require("bcryptjs");

const checkCredentialsFree = async (req, res, next) => {
  const { username, user_email } = req.body;

  const [user] = await Users.getUser({ username });
  const [email] = await Users.getUser({ user_email });

  if (user) {
    return res.status(401).json({ message: "username taken" });
  } else if (email) {
    return res.status(401).json({ message: "email taken" });
  }

  next();
};

const checkUserExists = async (req, res, next) => {
  const { username, password } = req.body;

  const [user] = await Users.getUser({ username });

  if (user && bcrypt.compareSync(password, user.password)) {
    next();
  } else {
    return res.status(401).json({ message: "invalid credentials" });
  }
};

module.exports = {
  checkUserExists,
  checkCredentialsFree,
};
