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

const getUserTasks = async (filter) => {
  const [user] = await db("users").where(filter);
  return db("todos").where({owner_id: user.user_id});
}

module.exports = {
  getAllUsers,
  addUser,
  getUser,
  getUserTasks
};
