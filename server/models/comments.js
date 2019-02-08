const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  user: String,
  body: String,
  report_id: String,
  created_at: new Date()
});

const Comments = mongoose.model('comment', commentSchema);

module.exports = Comments;