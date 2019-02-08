import { LOGIN_SUCCESS, REGISTER_USER_SUCCESS } from "../constants";

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.payload;
    case REGISTER_USER_SUCCESS:
      return action.payload;

    default:
      return state;
  }
};

export default userReducer;
