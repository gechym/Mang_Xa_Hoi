import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducer/rootReducer';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const middlewareEnhancers = applyMiddleware(...middlewares);

const composeEnhancers = composeWithDevTools(middlewareEnhancers);
const store = createStore(rootReducer, composeEnhancers);

export default store;
