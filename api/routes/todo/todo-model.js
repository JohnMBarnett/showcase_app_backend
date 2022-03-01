const db = require("../../../data/db-config");

const getUserToDos = async (profile_id) => {
  return db("todos").where({ profile_id });
};

const createToDo = (ToDo) => {
  return db("todos").insert(ToDo, [
    "profile_id",
    "todo_id",
    "todo_name",
    "todo_description",
    "todo_status",
  ]);
};

const deleteToDo = (ToDo_id) => {
  console.log(ToDo_id);
  return db("todos").where({ todo_id: ToDo_id.todo_id }).del();
};

const updateToDo = (todo_id, changes) => {
  return db("todos")
  .where("todo_id", todo_id)
  .first()
  .update(changes);
}

module.exports = {
  createToDo,
  deleteToDo,
  getUserToDos,
  updateToDo,
};
