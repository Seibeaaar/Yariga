import authReducer from './auth';
import userReducer from './user';
import ownPropertiesReducer from './property/own';
import recommendationsReducer from './property/recommendations';
import searchPropertiesReducer from './property/search';
import agreementReducer from './agreement';
import { combineReducers } from '@reduxjs/toolkit';

export default combineReducers({
  auth: authReducer,
  user: userReducer,
  ownProperties: ownPropertiesReducer,
  agreement: agreementReducer,
  recommendations: recommendationsReducer,
  searchProperties: searchPropertiesReducer,
});
