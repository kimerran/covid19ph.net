import { combineReducers } from 'redux'
import mainReducer from './main'

const allReducers = combineReducers({
  main: mainReducer,
});

export default allReducers;