import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
/* import { composeWithDevTools } from "redux-devtools-extension"; */
import thunkMiddleware from "redux-thunk";

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose; // This line is to link it with the browser extension

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunkMiddleware))
);
// This line is for making server petittions
export default store;
