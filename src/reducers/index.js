import { combineReducers } from 'redux';
import CheckLogin from './user.reducer'
import users from './users'
export default combineReducers({
   user: CheckLogin,
   getListUser: users
});