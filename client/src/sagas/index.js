import { all } from 'redux-saga/effects';
import { watchUserLogin, watchUserRegister } from './user';
import { watchUserLocation, watchWeatherLocation, watchSearchLocation, watchSearchLocationDetails } from './userInfo';

function* rootSaga() {
  yield all([
    watchUserLogin(),
    watchUserRegister(),
    watchUserLocation(),
    watchWeatherLocation(),
    watchSearchLocation(),
    watchSearchLocationDetails()
  ])
}

export default rootSaga
