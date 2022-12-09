import csrfFetch from "./csrf";

const RECEIVE_BOARDS = "RECEIVE_BOARDS";
const RECEIVE_BOARD = "RECEIVE_BOARD";
const ADD_BOARD = "ADD_BOARD";
const REMOVE_BOARD = "REMOVE_BOARD";

const receiveBoards = (boards) => ({
  type: RECEIVE_BOARDS,
  boards,
});

export const fetchBoards = (userId) => async (dispatch) => {
  const response = await csrfFetch(`/api/users/${userId}/boards`);
  const data = await response.json();
  dispatch(receiveBoards(data));
};

const receiveBoard = (board) => ({
  type: RECEIVE_BOARD,
  board,
});

export const fetchBoard = (boardId) => async (dispatch) => {
  const response = await csrfFetch(`/api/boards/${boardId}`);
  const data = await response.json();
  dispatch(receiveBoard(data.board));
};

const addBoard = (board) => ({
  type: ADD_BOARD,
  board,
});

export const createBoard = (board) => async (dispatch) => {
  const { name, description } = board;
  const response = await csrfFetch(`/api/boards/`, {
    method: "POST",
    header: { "Content-Type": "/application/json" },
    body: JSON.stringify({
      name,
      description,
    }),
  });
  const data = await response.json();
  dispatch(addBoard(data.board));
};

const removeBoard = (boardId) => ({
  type: REMOVE_BOARD,
  boardId,
});

export const deleteBoard = (boardId) => async (dispatch) => {
  const response = await csrfFetch(`/api/boards/${boardId}`, {
    method: "DELETE",
  });
  dispatch(removeBoard(boardId));
  return boardId;
};

const boardsReducer = (state = {}, action) => {
  const newState = { ...state };
  switch (action.type) {
    case RECEIVE_BOARDS:
      return { ...newState, ...action.boards };
    case RECEIVE_BOARD:
      newState[action.board.id] = action.board;
      return newState;
    case ADD_BOARD:
      newState[action.board.id] = action.board;
      return newState;
    case REMOVE_BOARD:
      delete newState[action.boardId];
      return newState;
    default:
      return state;
  }
};

export default boardsReducer;
