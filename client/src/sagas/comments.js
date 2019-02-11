import { takeEvery, call, put } from "redux-saga/effects";
import {
  ADD_COMMENT,
  ADD_COMMENT_SUCCESS,
  COMMENT_DETAILS,
  COMMENT_DETAILS_SUCCESS
} from "../constants";
import api from "../apis/api";

export function* watchAddComment() {
  yield takeEvery(ADD_COMMENT, addComment);
}

function* addComment(data) {
  try {
    const payload = yield call(api.create, "/api/report/comment", data.payload);
    yield put({ type: ADD_COMMENT_SUCCESS, payload });
  } catch (err) {
    console.log(err);
  }
}

export function* watchComments() {
  yield takeEvery(COMMENT_DETAILS, getComments);
}

function* getComments({reportId}) {
  try {
    const payload = yield call(api.get, `/api/report/comment?reportId=${reportId}`);
    yield put({ type: COMMENT_DETAILS_SUCCESS, payload });
  } catch (err) {
    console.log(err);
  }
}
