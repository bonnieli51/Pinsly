import csrfFetch from "./csrf";

const RECEIVE_COMMMENTS = "RECEIVE_COMMENTS";
const ADD_COMMENT = "ADD_COMMENT";

const receiveComments = (comments) => ({
  type: RECEIVE_COMMMENTS,
  comments,
});

export const fetchComments = (pinId) => async (dispatch) => {
  const response = await csrfFetch(`/api/pins/${pinId}/comments`);
  const data = await response.json();
  dispatch(receiveComments(data));
};

const addComment = (comment) => ({
  type: ADD_COMMENT,
  comment,
});

export const createComment = (comment) => async (dispatch) => {
  console.log(comment);
  const { pin_id, description } = comment;
  const response = await csrfFetch(`/api/comments/`, {
    method: "POST",
    header: { "Content-Type": "/application/json" },
    body: JSON.stringify({
      pin_id,
      description,
    }),
  });
  const data = await response.json();
  dispatch(addComment(data.comment));
};

const commentsReducer = (state = {}, action) => {
  const newState = { ...state };
  switch (action.type) {
    case RECEIVE_COMMMENTS:
      return { ...action.comments };
    case ADD_COMMENT:
      // newState[action.comment.id] = action.comment;
      // return newState;
      return { ...action.comments };
    default:
      return state;
  }
};

export default commentsReducer;
