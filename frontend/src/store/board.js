import csrfFetch from "./csrf";

const RECEIVE_BOARDS = "RECEIVE_BOARDS";
const RECEIVE_BOARD = "RECEIVE_BOARD";

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

const boardsReducer = (state = {}, action) =>{
    const newState = {...state}
    switch (action.type) {
        case RECEIVE_BOARDS:
            return{...newState, ...action.boards };
        case RECEIVE_BOARD:
            return newState[action.board.id] = action.board
        default:
            return state
    }
}

export default boardsReducer;
