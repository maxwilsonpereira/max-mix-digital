import React from "react";
import ReactDOM from "react-dom";
import "./global.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// ********** REDUX ********** //
// npm install --save redux AND npm install --save react-redux
// compose allows the use of more enhancers together. In this case,
// to be abble to use ReduxDev Tools Chrome extension.
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
// combineReducers is used to merge all reducers files into one.
// thunk is a Middleware, ready to go, that allows ASYNC CODE:
// npm i redux-thunk
import thunk from "redux-thunk";
import { Provider } from "react-redux";
// IMPORTING all the reducer files to combine in a unique REDUCER:
import globalReducer from "./store/reducers/global";

// REDUX STORE:
// rootReducer will be the the "ONLY" reducer from this app:
const rootReducer = combineReducers({
  global: globalReducer,
});

// composeEnhancers is to connect with the Redux DevTools Google Chrome Extension:
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
  // composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  // StrictMode renders components twice (on dev but not production)
  // in order to detect any problems with your code and warn you
  // about them (which can be quite useful).
  <React.StrictMode>
    {/* <Provider store={store}> IS FROM REDUX */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
