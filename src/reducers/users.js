import * as  types from '../constants/ActionTypes'

var initialState = {
    pending: false,
    users: [],
    error: null
}

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_USER_PENDING: {
            return {
                ...state,
                pending: true
            }
        }
        case types.FETCH_USER_SUCCESS: {
            return {
                ...state,
                pending: false,
                users: action.payload
            }
        }
        case types.FETCH_USER_ERROR: {
            return {
                ...state,
                pending: false,
                error: action.error
            }
        }
        default:
            return state
    }
}
export default myReducer