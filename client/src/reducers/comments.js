import {
  ADD_COMMENT_SUCCESS,
  COMMENT_DETAILS_SUCCESS
} from "../constants";

const initialState = {
  comments: [],
  addComment: ""
};

const userComments = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        addComment: action.payload
      };
      case COMMENT_DETAILS_SUCCESS:
        return {
          ...state,
          comments: action.payload.comments
        };
    default:
      return state;
  }
};

export default userComments;
