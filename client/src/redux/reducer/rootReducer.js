import { combineReducers } from 'redux';
import themeReducer from './themeReducer';

const rootReducer = combineReducers({
  themeState: themeReducer,
});

export default rootReducer;
