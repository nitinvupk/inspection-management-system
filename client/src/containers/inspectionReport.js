import { connect } from 'react-redux';
import InspectionReportList from '../components/InspectionReport/inspectionReportList';
import { getInspectionReport, addComment, getComments, updateStatus, updateData, logoutUser } from '../actions';

const mapStateToProps = state => ({
  reports: state.inspectionReport.reports,
  comments: state.userComments.comments,
  status: state.inspectionReport.statusUpdate
})

const mapDispatchToProps = {
  getInspectionReport,
  addComment,
  getComments,
  updateStatus,
  updateData,
  logoutUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InspectionReportList);
