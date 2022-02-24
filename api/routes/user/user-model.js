const db = require("../../../data/db-config");

const getAllUsers = () => {
  return db("users");
};

const getUser = (filter) => {
  return db("users").where(filter);
};

const addUser = async (newUser) => {
  const [newObj] = await db("users").insert(newUser, ["user_id", "username", "password", "user_email"]);
  return newObj;
};

module.exports = {
  getAllUsers,
  addUser,
  getUser
};
