const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  project_name: String,
  floor: Number,
  zone: String,
  image: String,
  title: String,
  description: String,
  archived: Boolean,
  status: String,
  created_by: String,
  created_at: new Date()
});

const Report = mongoose.model('report',reportSchema);

module.exports = Report;