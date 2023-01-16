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
  dispatch(receivePins(data));
};

export const fetchBoardPins = (boardId) => async (dispatch) => {
  const response = await csrfFetch(`/api/boards/${boardId}/board_pins]`);
  const data = await response.json();
  dispatch(receivePins(data));
};

const receivePin = (pin) => ({
  type: RECEIVE_PIN,
  pin,
});

export const fetchAllPins = () => async (dispatch) => {
  const response = await csrfFetch(`/api/pins`);
  const data = await response.json();
  dispatch(receivePins(data));
};

export const fetchPin = (pinId) => async (dispatch) => {
  const response = await csrfFetch(`/api/pins/${pinId}`);
  const data = await response.json();
  dispatch(receivePin(data.pin));
};

const pinsReducer = (state = {}, action) => {
  const newState = { ...state };
  switch (action.type) {
    case RECEIVE_PINS:
      return { ...action.pins };
    case RECEIVE_PIN:
      newState[action.pin.id] = action.pin;
      return newState;
    default:
      return state;
  }
};
export default pinsReducer;
