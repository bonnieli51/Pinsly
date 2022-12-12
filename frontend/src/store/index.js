import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import sessionReducer from "./session";
import boardsReducer from "./board";
import pinsReducer from "./pin";

export const rootReducer = combineReducers({
  session: sessionReducer,
  boards: boardsReducer,
  pins: pinsReducer,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState = {}) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
