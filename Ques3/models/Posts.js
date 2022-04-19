const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  post: String,
  description: String,
  comments: [String],
});

const post = mongoose.model("posts", PostSchema);

module.exports = { post };
