const router = require("express").Router();
const {
  createToDo,
  deleteToDo,
  getUserToDos,
  updateToDo,
} = require("./todo-model");

router.get("/:id", (req, res, next) => {
  getUserToDos(req.params.id)
    .then((todoArr) => {
      res.status(200).json(todoArr);
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
});

router.post("/", (req, res, next) => {
  createToDo(req.body)
    .then((ToDos) => {
      res.status(200).json(ToDos);
    })
    .catch((err) => {
      next(err);
    });
});

router.delete("/", (req, res, next) => {
  deleteToDo(req.body)
    .then((ToDos) => {
      res.status(201).json(ToDos);
    })
    .catch((err) => {
      next(err);
    });
});

router.put("/update-todo", (req, res, next) => {
  updateToDo(req.body.todo_id, { todo_status: req.body.todo_status })
    .then((res) => {
      next({ status: 201, message: res });
    })
    .catch((err) => {
      next({ status: 500, message: err.message });
    });
});

module.exports = router;
