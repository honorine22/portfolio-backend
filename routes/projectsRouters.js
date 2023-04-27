const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectControllers");
router.get("/", projectController.getAllProjects);
router.get("/:projectId", projectController.getProjectsById);
router.post("/", projectController.addNewProject);
router.delete("/:projectId", projectController.deleteProject);

module.exports = router;
