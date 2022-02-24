const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/user/user-router");
const todoRouter = require("./routes/todo/todo-router");
const authRouter = require("./routes/authentication/auth-router")

const server = express();
server.use(express.json());
server.use(cors());

server.use("/api/user", userRouter);
server.use("/api/todo", todoRouter);
server.use("/api/auth", authRouter)

module.exports = server;
