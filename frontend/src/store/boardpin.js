import csrfFetch from "./csrf";

const ADD_BOARDPIN = "ADD_BOARDPIN";
const REMOVE_BOARDPIN = "REMOVE_BOARDPIN";
const RECEIVE_BOARDPIN = "RECEIVE_BOARDPIN";

const addBoardPin = (message) => ({
  type: ADD_BOARDPIN,
  message,
});

export const createBoardPin = (boardpin) => async (dispatch) => {
  const { pin_id, board_id } = boardpin;
  const response = await csrfFetch(`/api/board_pins`, {
    method: "POST",
    header: { "Content-Type": "/application/json" },
    body: JSON.stringify({
      pin_id,
      board_id,
    }),
  });
  const data = await response.json();
  dispatch(addBoardPin(data.message));
};

const removeBoardPin = (boardPinId) => ({
  type: REMOVE_BOARDPIN,
  boardPinId,
});

export const deleteBoardPin = (boardId, pinId) => async (dispatch) => {
  await csrfFetch(`/api/board_pin/${boardId}/${pinId}`, {
    method: "DELETE",
  });
  dispatch(removeBoardPin());
};

const receiveBoardPin = (message) => ({
  type: RECEIVE_BOARDPIN,
  message,
});

export const checkBoardPin = (boardId, pinId) => async (dispatch) => {
  const response = await csrfFetch(`/api/board_pin/${boardId}/${pinId}`);
  const data = await response.json();
  dispatch(receiveBoardPin(data.message));
};

const boardPinsReducer = (state = {}, action) => {
  const newState = { ...state };
  switch (action.type) {
    // case ADD_BOARDPIN:
    //   newState["saved"] = action.message;
    //   return newState;
    case RECEIVE_BOARDPIN:
      newState["message"] = action.message;
      return newState;
    default:
      return state;
  }
};

export default boardPinsReducer;
