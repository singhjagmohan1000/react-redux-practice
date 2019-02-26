import { createStore, applyMiddleware, compose } from "redux";
//import { composeWithDevTools } from "redux-devtools-extension";
import { forbiddenWordsMiddleware } from "../middleware/index";
import rootReducer from "../reducers/index";
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(forbiddenWordsMiddleware))
);
export default store;
