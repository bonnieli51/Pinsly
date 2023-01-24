import csrfFetch from "./csrf";

const ADD_BOARDPIN = "ADD_BOARDPIN";
const REMOVE_BOARDPIN = "REMOVE_BOARDPIN";
const RECEIVE_BOARDPIN = "RECEIVE_BOARDPIN";

const addBoardPin = (boardpin) => ({
  type: ADD_BOARDPIN,
  boardpin,
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
  dispatch(addBoardPin(data.boardpin));
};

const removeBoardPin = (boardPinId) => ({
  type: REMOVE_BOARDPIN,
  boardPinId,
});

export const deleteBoardPin = (boardId, pinId) => async (dispatch) => {
  await csrfFetch(`/api/board_pin/${boardId}/${pinId}`, {
    method: "DELETE",
  });
  dispatch(removeBoardPin(boardId, pinId));
};

const receiveBoardPin = (boardPin) => ({
  type: RECEIVE_BOARDPIN,
  boardPin,
});

export const fetchBoardPin = (boardId, pinId) => async (dispatch) => {
  const response = await csrfFetch(`/api/board_pin/${boardId}/${pinId}`, {});
  const data = await response.json();
  dispatch(receiveBoardPin(data.boardPin));
};
