import {
  ADD_INSPECTION_REPORT_SUCCESS,
  INSPECTION_REPORT_SUCCESS,
  UPDATE_STATUS_SUCCESS,
  UPDATE_DATA_SUCCESS
} from "../constants";

const initialState = {
  reports: [],
  addInspectionReport: "",
  statusUpdate: '',
  updatedData: ''
};

const inspectionReport = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INSPECTION_REPORT_SUCCESS:
      return {
        ...state,
        addInspectionReport: action.payload
      };
    case INSPECTION_REPORT_SUCCESS:
      return {
        ...state,
        reports: action.payload.reports
      };
    case UPDATE_STATUS_SUCCESS:
      return {
        ...state,
        statusUpdate: action.payload.status
      };
      case UPDATE_DATA_SUCCESS:
        return {
          ...state,
          updatedData: action.payload
        };
    default:
      return state;
  }
};

export default inspectionReport;
