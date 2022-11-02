const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  cattegory: { type: String },
  type : { type: String },
  question:{type:String},
  difficulty: { type: String },
  correct_answer:{ type: String },
  incorrect_answers:{ type:Array},
});

const quizModel = mongoose.model("quiz", quizSchema);

module.exports = quizModel;