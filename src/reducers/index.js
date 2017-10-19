import {combineReducers} from 'redux';
import UserReducer from './reducer_user';



//colects the Reducers and combine's them into one object called allReducers
const allReducers = combineReducers({
      users: UserReducer

     });

export default allReducers;
