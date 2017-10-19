import {combineReducers} from 'redux';
import UserReducer from './reducer_user';
import ActiveUserReducer from './reducer_active_user';


//colects the Reducers and combine's them into one object called allReducers
const allReducers = combineReducers({
      users: UserReducer,
      activeUser: ActiveUserReducer
     });

export default allReducers;
