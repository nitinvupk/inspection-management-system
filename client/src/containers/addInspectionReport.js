import { connect } from 'react-redux';
import AddInspectionReport from '../components/InspectionReport/addInspectionReport';
import { addInspectionReport } from '../actions';

const mapStateToProps = state => ({
  addInspection: state.inspectionReport.addInspectionReport
})

const mapDispatchToProps = {
  addInspectionReport
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddInspectionReport);
