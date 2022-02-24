const db = require("../../../data/db-config");

const createToDo = (ToDo) => {
    return db("todos").insert(ToDo, ["owner_id", "todo_id", "todo"]);
}

const deleteToDo = (ToDo_id) => {
    console.log(ToDo_id);
    return db("todos").where({todo_id: ToDo_id.todo_id}).del();
}

module.exports = {
    createToDo,
    deleteToDo
}