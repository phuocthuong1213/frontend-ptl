const initState = {
    loggedIn: false,
    userId: -1,
    token: "",
    username: "",
    firstname: "",
    lastname: "",
    email: ""
}


function UserReducer(state = initState, payload) {
    switch (payload.type) {
        case 'SET_USER_INFO':
            return { 
                ...state, 
                ...payload.user 
             }
    }

    return state;
}

export default UserReducer