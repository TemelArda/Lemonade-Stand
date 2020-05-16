import formReducer from './formReducer';
import {combineReducers} from 'redux'


export default combineReducers({
    formData: formReducer
  });