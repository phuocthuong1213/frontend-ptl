import * as types from '../constants/ActionTypes'

export const adminEditUser = (user) => {
    return {
        type: types.ADMIN_EDIT_USER,
        user
    }
}

