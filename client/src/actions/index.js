import {
  LOGIN_USER,
  LOGIN_SUCCESS,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  ADD_INSPECTION_REPORT,
  ADD_INSPECTION_REPORT_SUCCESS,
  INSPECTION_REPORT,
  INSPECTION_REPORT_SUCCESS,
  ADD_COMMENT,
  ADD_COMMENT_SUCCESS,
  COMMENT_DETAILS,
  COMMENT_DETAILS_SUCCESS,
  UPDATE_STATUS,
  UPDATE_STATUS_SUCCESS,
  LOGOUT_USER,
  LOGOUT_SUCCESS,
  UPDATE_DATA,
  UPDATE_DATA_SUCCESS
} from "../constants";

export const RegisterUser = payload => ({ type: REGISTER_USER, payload });

export const RegisterSuccess = payload => ({
  type: REGISTER_USER_SUCCESS,
  payload
});

export const LoginUser = payload => ({ type: LOGIN_USER, payload });

export const LoginSuccess = payload => ({ type: LOGIN_SUCCESS, payload });

export const addInspectionReport = payload => ({
  type: ADD_INSPECTION_REPORT,
  payload
});

export const addInspectionReportSuccess = payload => ({
  type: ADD_INSPECTION_REPORT_SUCCESS,
  payload
});

export const getInspectionReport = query => ({
  type: INSPECTION_REPORT,
  query
});

export const listInspectionReport = payload => ({
  type: INSPECTION_REPORT_SUCCESS,
  payload
});

export const addComment = payload => ({ type: ADD_COMMENT, payload });

export const addCommentSuccess = payload => ({
  type: ADD_COMMENT_SUCCESS,
  payload
});

export const getComments = reportId => ({ type: COMMENT_DETAILS, reportId });

export const listComments = payload => ({
  type: COMMENT_DETAILS_SUCCESS,
  payload
});

export const updateStatus = payload => ({ type: UPDATE_STATUS, payload });

export const updateStatusSuccess = payload => ({
  type: UPDATE_STATUS_SUCCESS,
  payload
});

export const updateData = payload => ({ type: UPDATE_DATA, payload });

export const updateDataSuccess = payload => ({
  type: UPDATE_DATA_SUCCESS,
  payload
});

export const logoutUser = () => ({ type: LOGOUT_USER });

export const logoutSuccess = () => ({ type: LOGOUT_SUCCESS });
