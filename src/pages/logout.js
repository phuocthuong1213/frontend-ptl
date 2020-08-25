import Router from 'next/router';
import { connect } from "react-redux"
import React, { useEffect } from 'react';
import cookie from 'js-cookie';
import { removeCookie } from '../helpers/help';
import { signout } from '../api/user';
const Logout = (props) => {

    useEffect(() => {

        props.dispatch({
            type: 'SET_USER_INFO',
            user: {
                loggedIn: false,
                userId: -1,
                token: "",
                username: "",
                firstname: "",
                lastname: "",
                email: ""
            }
        })
        cookie.remove('token')
        window.localStorage.removeItem('user')
        Router.push(`/`);
    }, [])

    return (
        <div></div>
    )
}

const mapStateToProps = (reduxState) => {
    return {

    }
}


const mapDispatchToProps = (dispatch, props) => {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);