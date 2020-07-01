import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import occurrenceReducer from './occurrenceListReducer';
import scheduleReducer from './scheduleReducer';

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  occurrenceList: occurrenceReducer,
  schedules: scheduleReducer
});