import { applyMiddleware, createStore, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";

export default function configureStore(initState) {
  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancer = [middlewareEnhancer];
  const composedEnhancers = compose(...enhancer);

  const store = createStore(rootReducer, initState, composedEnhancers);

  return store;
}
