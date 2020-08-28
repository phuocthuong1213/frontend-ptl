import * as  types from '../constants/ActionTypes'

var initialState = {}

var myReducer = (state = initialState, action) => {
    switch (action.type) {
       
        case types.ADMIN_EDIT_USER: {
            console.log(action);
            return {
                state,
            }
        }
        default:
            return state
    }
}
export default myReducer