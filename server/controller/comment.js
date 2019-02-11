const Comments = require('../models/comments');

exports.createComment = async (req, res) => {
  try {
    const comment = new Comments({
      user: req.body.user,
      body: req.body.body,
      report_id: req.body.report_id,
      created_at: new Date()
    });

    await comment.save();
    res.send({ auth: true, success: true, message: 'new comment created.' });
  
  } catch (err) {
    console.log(err);
  }
}

exports.getComments = async (req, res) => {
  try {
    const comments = await Comments.find({ report_id: req.query.reportId });
    res.send({ auth: true, success: true, comments });
  } catch (err) {
    console.log(err);
  }
}