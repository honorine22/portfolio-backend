const Project = require("../models/projects.model");
exports.getAllProjects = async (req, res) => {
  try {
    let project = await find();
    res.status(200).json(project);
  } catch (err) {
    res.status(500).json(err);
  }
}

exports.getProjectsById = async (req, res) => {
  try {
    const id = req.params.projectId;
    let project = await findOne({ _id: id });
    res.status(200).json(project);
  } catch (err) {
    res.status(500).json(err);
  }
}

exports.addNewProject = async (req, res) => {
  try {
    const project = new Project({
      email: req.body.email,
      phoneNo: req.body.phoneNo,
      title: req.body.title,
      service: req.body.service,
      description: req.body.description
    });

    let newProject = await project.save();
    res.status(200).json({ data: newProject });
  } catch (err) {
    res.status(500).json({ error: err });
  }
}

exports.deleteProject = async (req, res) => {
  try {
    const id = req.params.projectId;
    let result = await findOneAndDelete({ _id: id });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
}
