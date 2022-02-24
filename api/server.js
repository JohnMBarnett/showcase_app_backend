const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/user/user-router");
const todoRouter = require("./routes/todo/todo-router");

const server = express();
server.use(express.json());
server.use(cors());

server.use("/api/user", userRouter);
server.use("/api/todo", todoRouter)

module.exports = server;
