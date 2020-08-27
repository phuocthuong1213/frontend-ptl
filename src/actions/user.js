import * as user from '../constants/ActionTypes'

export const fetchUsersPending = () => {
    return {
        type: user.FETCH_USER_PENDING,
    }
}


export const fetchUsersSuccess = users => {
    return {
        type: user.FETCH_USER_SUCCESS,
        users: users
    }
}


export const fetchUsersError = error => {
    return {
        type: user.FETCH_USER_ERROR,
        error: error
    }
}