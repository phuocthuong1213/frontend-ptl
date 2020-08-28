import * as  types from '../constants/ActionTypes'

var initialState = {}

var AdminUserEditing = (state = initialState, action) => {
    switch (action.type) {
        case types.ADMIN_EDIT_USER:
            return action.user
        default:
            return state
    }
}
export default AdminUserEditing