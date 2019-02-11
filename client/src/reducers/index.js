import { combineReducers } from 'redux';
import userComments from './comments';
import inspectionReport from './inspectionReport';
import userInfo from './userInfo';
import user from './user';

export default combineReducers({
    user,
    inspectionReport,
    userComments,
    userInfo,
})
