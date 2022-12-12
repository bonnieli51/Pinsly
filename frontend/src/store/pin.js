import csrfFetch from "./csrf";

const RECEIVE_PINS = "RECEIVE_PINS";
const RECEIVE_PIN = "RECEIVE_PIN";
const ADD_PIN = "ADD_PIN"; 
const REMOVE_PIN = "REMOVE_PIN";

const receivePins = (pins) => ({
    type: RECEIVE_PINS,
    pins,
  });
  
  export const fetchPins = (boardId) => async (dispatch) => {
    const response = await csrfFetch(`/api/boards/${boardId}/pins`);
    const data = await response.json();
    dispatch(receiveBoards(data));
  };

  const receivePin = (pins) => ({
    type: RECEIVE_PINS,
    pins,
  });
  
  export const fetchPin = (boardId, pinId) => async (dispatch) => {
    const response = await csrfFetch(`/api/boards/${boardId}/pins/${pinId}`);
    const data = await response.json();
    dispatch(receiveBoard(data.pin));
  };

  