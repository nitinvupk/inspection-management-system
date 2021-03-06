const Report = require("../models/report");


exports.createReport = async (req, res) => {
  try {
    if (
      !req.body.project_name ||
      !req.body.floor ||
      !req.body.zone ||
      !req.body.title ||
      !req.body.status
    ) {
      return res.send({
        auth: true,
        success: false,
        message: "Please fill the required fields"
      });
    }

    const report = new Report({
      project_name: req.body.project_name,
      floor: req.body.floor,
      zone: req.body.zone,
      image: req.file.path,
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      created_by: req.userId,
      created_at: new Date()
    });

    await report.save();
    res.send({ auth: true, success: true, report });
  } catch (err) {
    console.log(err);
  }
};

exports.getReports = async (req, res) => {
  try {
    let reports;
    if (req.userRole === "Safety Manager") {
      if(req.query.archived === 'Yes') {
      reports = await Report.find({ archived: true });
    }else {
      reports = await Report.find({ archived: false });
    }
    }
    if (req.userRole === "Safety Officer") {
      reports = await Report.find({ created_by: req.userId });
    }
    if (req.userRole === "Safety Engineer") {
      reports = await Report.find({ status: 'Assigned to Engineer' });
    }
    res.send({ auth: true, success: true, reports });
  } catch (err) {
    console.log(err);
  }
};

exports.updateSingleReport = async (req, res) => {
  try {
      const updateQuery = {
        status: 'Opened',
        title: req.body.status.title,
        description: req.body.status.description,
      };
    const report = await Report.findOneAndUpdate(
      { _id: req.query.reportId },
      updateQuery
    );
    res.send({ auth: true, status: req.body.status });
  } catch (err) {
    console.log(err);
  }
};

exports.updateReport = async (req, res) => {
  try {
    let updateQuery;
    if (req.body.status === "Completed") {
      updateQuery = {
        status: req.body.status,
        archived: true
      };
    }else {
      updateQuery = {
        status: req.body.status
      };
    }
    const report = await Report.findOneAndUpdate(
      { _id: req.query.reportId },
      updateQuery
    );
    res.send({ auth: true, status: req.body.status });
  } catch (err) {
    console.log(err);
  }
};

exports.deleteReport = async (req, res) => {
  try {
    await Report.remove({ _id: req.query.reportId });
    res.send({ auth: true, success: true, message: "report deleted" });
  } catch (err) {
    console.log(err);
  }
};
