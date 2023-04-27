let mongoose = require("mongoose");
let projectSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  service: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

let Project = mongoose.model("Project", projectSchema);
module.exports = Project;
