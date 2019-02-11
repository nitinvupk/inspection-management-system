import {
  ADD_INSPECTION_REPORT_SUCCESS,
  INSPECTION_REPORT_SUCCESS
} from "../constants";

const initialState = {
  reports: [],
  addInspectionReport: ""
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
    default:
      return state;
  }
};

export default inspectionReport;
