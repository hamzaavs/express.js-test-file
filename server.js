const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");

const userRouter = require("./Routes/users");

app.use("/users", userRouter);

app.listen(3000);