const Comments = require('../models/comments');

exports.createReport = async (req, res) => {
  try {
    const comment = new Comments({
      user: req.body.user,
      body: req.body.description,
      report_id: req.body.report_id
    });

    await comment.save();
    res.send({ auth: true, success: true, message: 'new report has been created' });
  
  } catch (err) {
    console.log(err);
  }
}