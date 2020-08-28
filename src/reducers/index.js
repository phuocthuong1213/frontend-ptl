import { combineReducers } from 'redux';
import CheckLogin from './user.reducer'
import AdminUserEditing from './adminUserEditing'
export default combineReducers({
   user: CheckLogin,
   AdminUserEditing: AdminUserEditing
});