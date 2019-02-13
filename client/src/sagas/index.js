import { all } from 'redux-saga/effects';
import { watchUserLogin, watchUserRegister, watchUserLogout } from './user';
import { watchAddInspectionReport, watchInspectionReport, watchUpdateStatus, watchUpdateData } from './inspectionReport';
import { watchAddComment, watchComments } from './comments';

function* rootSaga() {
  yield all([
    watchUserLogin(),
    watchUserRegister(),
    watchAddInspectionReport(),
    watchInspectionReport(),
    watchAddComment(),
    watchComments(),
    watchUpdateStatus(),
    watchUpdateData(),
    watchUserLogout(),
  ])
}

export default rootSaga
