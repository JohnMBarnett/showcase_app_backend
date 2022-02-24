const router = require("express").Router();
const { createToDo, deleteToDo } = require("./todo-model");

router.post("/", (req, res, next) => {
  createToDo(req.body)
    .then((ToDos) => {
      res.status(200).json(ToDos);
    })
    .catch((err) => {
      next(err);
    });
});

router.put("/", (req, res, next) => {
  deleteToDo(req.body)
    .then((ToDos) => {
      res.status(201).json(ToDos);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
