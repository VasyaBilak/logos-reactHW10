import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevToolsDevelopmentOnly } from '@redux-devtools/extension';
import albumsReducer from "./reducers/postsReducer";
import todosReducer from "./reducers/postsReducer";
import commentsReducer from "./reducers/postsReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    albumsReducer: albumsReducer,
    todosReducer: todosReducer,
    commentsReducer: commentsReducer,
})

const composeEnhancers = composeWithDevToolsDevelopmentOnly({
    trace: true,
    traceLimit: 25
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;