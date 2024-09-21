import authReducer from './auth';
import userReducer from './user';
import { combineReducers } from '@reduxjs/toolkit';

export default combineReducers({
  auth: authReducer,
  user: userReducer,
});
