let mongoose = require("mongoose");
let commentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNo: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
});

let Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
