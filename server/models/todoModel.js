const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  dateCreated: { type: Date, default: Date.now },
  isDone: Boolean,
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;