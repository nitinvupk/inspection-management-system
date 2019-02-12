import { all } from 'redux-saga/effects';
import { watchUserLogin, watchUserRegister, watchUserLogout } from './user';
import { watchAddInspectionReport, watchInspectionReport, watchUpdateStatus } from './inspectionReport';
import { watchAddComment, watchComments } from './comments';
import { watchUserLocation, watchWeatherLocation, watchSearchLocation, watchSearchLocationDetails } from './userInfo';

function* rootSaga() {
  yield all([
    watchUserLogin(),
    watchUserRegister(),
    watchAddInspectionReport(),
    watchInspectionReport(),
    watchAddComment(),
    watchComments(),
    watchUpdateStatus(),
    watchUserLogout(),
    watchUserLocation(),
    watchWeatherLocation(),
    watchSearchLocation(),
    watchSearchLocationDetails()
  ])
}

export default rootSaga
