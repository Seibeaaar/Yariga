import authReducer from './auth';
import userReducer from './user';
import ownPropertiesReducer from './property/own';
import agreementReducer from './agreement';
import { combineReducers } from '@reduxjs/toolkit';

export default combineReducers({
  auth: authReducer,
  user: userReducer,
  ownProperties: ownPropertiesReducer,
  agreement: agreementReducer,
});
