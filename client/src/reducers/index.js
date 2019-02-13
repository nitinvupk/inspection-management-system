import { combineReducers } from 'redux';
import userComments from './comments';
import inspectionReport from './inspectionReport';
import user from './user';

export default combineReducers({
    user,
    inspectionReport,
    userComments,
})
