const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  createdAt: {
  type: Date,
  default: Date.now
  },
  completed: {
    type: Boolean,
    default: false
  },
  dueDate: Date,
  category: String
}, { timestamps: true });

module.exports = mongoose.model("Task", taskSchema);