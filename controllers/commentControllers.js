const Comment = require("../models/comments.model");
exports.getAllComments = async (req, res) => {
  try {
    let comment = await Comment.find();
    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getCommentsById = async (req, res) => {
  try {
    const id = req.params.commentId;
    let comment = await Comment.findOne({ _id: id });
    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.addNewComment = async (req, res) => {
  try {
    const comment = new Comment({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phoneNo: req.body.phoneNo,
      message: req.body.message
    });

    let newComment = await comment.save();
    res.status(200).json({ data: newComment });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
exports.deleteComment = async (req, res) => {
  try {
    const id = req.params.commentId;
    let result = await Comment.findOneAndDelete({ _id: id });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};
