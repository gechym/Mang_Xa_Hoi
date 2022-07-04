import { combineReducers } from 'redux';
import themeReducer from './themeReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  themeState: themeReducer,
  userState: userReducer,
});

export default rootReducer;
