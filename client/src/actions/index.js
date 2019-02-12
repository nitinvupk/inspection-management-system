import { LOGIN_USER,
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
         USER_LOCATION,
         USER_LOCATION_SUCCESS,
         WEATHER_LOCATION_DETAILS,
         WEATHER_LOCATION_DETAILS_SUCCESS,
         WOEID_LOCATION,
         WOEID_LOCATION_SUCCESS,
         SEARCH_LOCATION,
         SEARCH_LOCATION_SUCCESS,
         SEARCH_LOCATION_DETAILS,
         SEARCH_LOCATION_DETAILS_SUCCESS
          } from '../constants';

export const RegisterUser = payload => ({ type:REGISTER_USER, payload });

export const RegisterSuccess = payload => ({ type:REGISTER_USER_SUCCESS, payload });

export const LoginUser = payload => ({ type:LOGIN_USER, payload });

export const LoginSuccess = payload => ({ type:LOGIN_SUCCESS, payload });

export const addInspectionReport = payload => ({ type: ADD_INSPECTION_REPORT, payload });

export const addInspectionReportSuccess = payload => ({ type:ADD_INSPECTION_REPORT_SUCCESS, payload });

export const getInspectionReport = query => ({ type: INSPECTION_REPORT, query });

export const listInspectionReport = (payload) => ({ type: INSPECTION_REPORT_SUCCESS, payload });

export const addComment = payload => ({ type: ADD_COMMENT, payload });

export const addCommentSuccess = payload => ({ type:ADD_COMMENT_SUCCESS, payload });

export const getComments = (reportId) => ({ type: COMMENT_DETAILS, reportId });

export const listComments = (payload) => ({ type: COMMENT_DETAILS_SUCCESS, payload });

export const updateStatus = payload => ({ type: UPDATE_STATUS, payload });

export const updateStatusSuccess = payload => ({ type:UPDATE_STATUS_SUCCESS, payload });

export const logoutUser = () => ({ type:LOGOUT_USER });

export const logoutSuccess = () => ({ type:LOGOUT_SUCCESS });



export const getUserLocation = () => ({ type: USER_LOCATION });

export const listUserLocation = (payload) => ({ type: USER_LOCATION_SUCCESS, payload });

export const getWeatherLocation = (payload) => ({ type: WEATHER_LOCATION_DETAILS, payload });

export const listWeatherLocation = (payload) => ({ type: WEATHER_LOCATION_DETAILS_SUCCESS, payload });

export const getWoeidLocation = (payload) => ({ type: WOEID_LOCATION, payload });

export const listWoeidLocation = (payload) => ({ type: WOEID_LOCATION_SUCCESS, payload });

export const getSearchLocation = (payload) => ({ type: SEARCH_LOCATION, payload });

export const listSearchLocation = (payload) => ({ type: SEARCH_LOCATION_SUCCESS, payload });

export const getSearchLocationDetails = (payload) => ({ type: SEARCH_LOCATION_DETAILS, payload });

export const listSearchLocationDetails = (payload) => ({ type: SEARCH_LOCATION_DETAILS_SUCCESS, payload });
