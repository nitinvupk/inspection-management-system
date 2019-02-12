import { takeEvery, call, put } from "redux-saga/effects";
import {
  LOGIN_USER,
  LOGIN_SUCCESS,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  LOGOUT_USER,
  LOGOUT_SUCCESS
} from "../constants";
import api from "../apis/api";

export function* watchUserRegister() {
  yield takeEvery(REGISTER_USER, registerUser);
}

function* registerUser(data) {
  try {
    const payload = yield call(api.create, "/api/register", data.payload);
    yield put({ type: REGISTER_USER_SUCCESS, payload });
  } catch (err) {
    console.log(err);
  }
}

export function* watchUserLogin() {
  yield takeEvery(LOGIN_USER, loginUser);
}

function* loginUser(data) {
  try {
    const payload = yield call(api.create, "/api/login", data.payload);
    if (payload.auth) {
      window.localStorage.setItem("token", payload.token);
      window.localStorage.setItem("user", payload.currentUser.name);
      window.localStorage.setItem("role", payload.currentUser.role);
      window.localStorage.setItem("auth", payload.auth);
    }
    yield put({ type: LOGIN_SUCCESS, payload });
  } catch (err) {
    console.log(err);
  }
}

export function* watchUserLogout() {
  yield takeEvery(LOGOUT_USER, logoutUser);
}

function* logoutUser() {
  try {
    const payload = yield call(api.get, "/api/logout");

    if (!payload.auth) {
      window.localStorage.setItem("token", payload.token);
      window.localStorage.removeItem("user");
      window.localStorage.removeItem("role");
      window.localStorage.setItem("auth", payload.auth);
    }
    yield put({ type: LOGOUT_SUCCESS, payload });
  } catch (err) {
    console.log(err);
  }
}
