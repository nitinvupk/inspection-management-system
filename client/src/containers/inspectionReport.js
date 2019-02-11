import { connect } from 'react-redux';
import InspectionReportList from '../components/InspectionReport/inspectionReportList';
import { getInspectionReport, addComment, getComments, updateStatus } from '../actions';

const mapStateToProps = state => ({
  reports: state.inspectionReport.reports,
  comments: state.userComments.comments
})

const mapDispatchToProps = {
  getInspectionReport,
  addComment,
  getComments,
  updateStatus
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InspectionReportList);
