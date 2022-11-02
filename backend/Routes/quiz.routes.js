const express = require("express");
const quiz = require("../models/quiz.model")
const quizController = express.Router();
quizController.get("/", async (req, res) => {
  let { page, limit } = req.query;
console.log(page,limit)
  const fillter = req.query.cattegory 
  if (fillter&&page&&limit) {
    let cattegory = { cattegory: fillter };
    console.log(cattegory,limit,page)
    const results = await quiz.find(cattegory).limit(limit * 1).skip((page - 1) * limit);;
    res.send({ message: "Get request successful", results });
  } 

  else {
    console.log("23",limit)
    var results = await quiz.find({})
    .skip((page - 1) * limit);
    return res.status(200).send({ message: "Get request successful", results,});
  }

});

module.exports = quizController;