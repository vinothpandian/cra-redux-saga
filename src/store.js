import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer as formReducer } from "redux-form";

import reducers from "./redux/reducers";
import middleware, { sagaMiddleware } from "./middleware";
import rootSaga from "./sagas";

export default createStore(
  combineReducers({
    ...reducers,
    form: formReducer
  }),
  composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga);
