const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const connection = require("./config/db");

const userController = require('./routes/user.routes');
const quizController = require("./Routes/quiz.routes");
const authentication = require('./middlewares/authentication');
// quizController
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});

app.use('/',userController);
app.use(authentication);

app.use("/quiz", quizController);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("db connected");
  } catch (error) {
    console.log("error in connecting db");
    console.log(error);
  }
});