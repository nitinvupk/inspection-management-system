import { all } from 'redux-saga/effects';
import { watchUserLogin, watchUserRegister } from './user';
import { watchAddInspectionReport, watchInspectionReport } from './inspectionReport';
import { watchUserLocation, watchWeatherLocation, watchSearchLocation, watchSearchLocationDetails } from './userInfo';

function* rootSaga() {
  yield all([
    watchUserLogin(),
    watchUserRegister(),
    watchAddInspectionReport(),
    watchInspectionReport(),
    watchUserLocation(),
    watchWeatherLocation(),
    watchSearchLocation(),
    watchSearchLocationDetails()
  ])
}

export default rootSaga
