import { takeEvery, call, put } from "redux-saga/effects";
import {
  ADD_INSPECTION_REPORT,
  ADD_INSPECTION_REPORT_SUCCESS,
  INSPECTION_REPORT,
  INSPECTION_REPORT_SUCCESS
} from "../constants";
import api from "../apis/api";

export function* watchAddInspectionReport() {
  yield takeEvery(ADD_INSPECTION_REPORT, addInspectionReport);
}

function* addInspectionReport(data) {
  try {
    const payload = yield call(api.create, "/api/report", data.payload);
    yield put({ type: ADD_INSPECTION_REPORT_SUCCESS, payload });
  } catch (err) {
    console.log(err);
  }
}

export function* watchInspectionReport() {
  yield takeEvery(INSPECTION_REPORT, getInspectionReport);
}

function* getInspectionReport() {
  try {
    const payload = yield call(api.get, "/api/reports");
    yield put({ type: INSPECTION_REPORT_SUCCESS, payload });
  } catch (err) {
    console.log(err);
  }
}
