const Report = require('../models/report');

exports.createReport = async (req, res) => {
  try {
    const report = new Report({
      project_name: req.body.project_name,
      floor: req.body.floor,
      zone: req.body.zone,
      image: req.body.image,
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      created_by: req.body.created_by,
      created_at: new Date()
    });

    await report.save();
    res.send({ auth: true, success: true, message: 'new report has been created' });
  
  } catch (err) {
    console.log(err);
  }
}

exports.getReports = async (req, res) => {
  try {

  } catch (err) {
    console.log(err);
  }
}

exports.updateReport = async (req, res) => {
  try {
    
  } catch (err) {
    console.log(err);
  }
}

exports.deleteReport = async (req, res) => {
  try {

  } catch (err) {
    console.log(err);
  }
}