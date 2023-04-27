const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentControllers");
router.get("/", commentController.getAllComments);
router.get("/:commentId", commentController.getCommentsById);
router.post("/", commentController.addNewComment);
router.delete("/:commentId", commentController.deleteComment);

module.exports = router;
