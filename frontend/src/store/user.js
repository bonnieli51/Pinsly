import csrfFetch from "./csrf";

const RECEIVE_USER = "RECEIVE_USER";

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user,
});

export const fetchUser = (userId) => async (dispatch) => {
  const response = await csrfFetch(`/api/users/${userId}`);
  const data = await response.json();
  dispatch(receiveUser(data.user));
};

const usersReducer = (state = {}, action) => {
  const newState = { ...state };
  switch (action.type) {
    case RECEIVE_USER:
      newState[action.user.id] = action.user;
      return newState;
    default:
      return state;
  }
};
export default usersReducer;
