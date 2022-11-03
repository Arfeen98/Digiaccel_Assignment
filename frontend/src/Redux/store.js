import { applyMiddleware,combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { AppReducer } from "./appReducer/reducer";
import { AuthReducer } from "./authReducer/reducer"

const Reducer = combineReducers({
  AppReducer:AppReducer,
  AuthReducer:AuthReducer
});

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

export const store = legacy_createStore(Reducer,composeEnhancers(applyMiddleware(thunk)));
