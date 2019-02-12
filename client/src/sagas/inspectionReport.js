import { takeEvery, call, put } from "redux-saga/effects";
import {
  ADD_INSPECTION_REPORT,
  ADD_INSPECTION_REPORT_SUCCESS,
  INSPECTION_REPORT,
  INSPECTION_REPORT_SUCCESS,
  UPDATE_STATUS,
  UPDATE_STATUS_SUCCESS
} from "../constants";
import api from "../apis/api";

export function* watchAddInspectionReport() {
  yield takeEvery(ADD_INSPECTION_REPORT, addInspectionReport);
}

function* addInspectionReport(data) {
  try {
    const payload = yield call(api.createReport, "/api/report", data.payload);
    yield put({ type: ADD_INSPECTION_REPORT_SUCCESS, payload });
  } catch (err) {
    console.log(err);
  }
}

export function* watchInspectionReport() {
  yield takeEvery(INSPECTION_REPORT, getInspectionReport);
}

function* getInspectionReport({query}) {
  try {
    const payload = yield call(api.get, `/api/reports?archived=${query.archived}`);
    yield put({ type: INSPECTION_REPORT_SUCCESS, payload });
  } catch (err) {
    console.log(err);
  }
}

export function* watchUpdateStatus() {
  yield takeEvery(UPDATE_STATUS, updateStatus);
}

function* updateStatus(data) {
  try {
    const payload = yield call(api.put, `/api/report?reportId=${data.payload.reportId}`, data.payload.status);
    yield put({ type: UPDATE_STATUS_SUCCESS, payload });
  } catch (err) {
    console.log(err);
  }
}
