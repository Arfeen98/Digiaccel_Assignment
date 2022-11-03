const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  question:{type:String},
  difficulty: { type: String || Number },
  correct_answer:{ type: String },
  incorrect_answers:{ type:Array},
});

const quizModel = mongoose.model("quiz", quizSchema);

module.exports = quizModel;