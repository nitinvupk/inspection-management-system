import { connect } from 'react-redux';
import InspectionReportList from '../components/InspectionReport/inspectionReportList';
import { getInspectionReport } from '../actions';

const mapStateToProps = state => ({
  reports: state.inspectionReport.reports
})

const mapDispatchToProps = {
  getInspectionReport
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InspectionReportList);
