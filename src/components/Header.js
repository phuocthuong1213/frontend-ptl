import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { connect } from 'react-redux';
import * as helpers from '../helpers/help'
import { checkLoginUser } from '../api/user';
function Header(props) {
    const checkLogin = () => {
        const token = helpers.getCookie('token') || ""
        const user = JSON.parse(window.localStorage.getItem('user'))
        if (token.length > 0) {
            if (token && user._id) {
                const data = {
                    token: token,
                    _id: user._id
                }
                checkLoginUser(data).then(res => {
                    props.dispatch({
                        type: 'SET_USER_INFO',
                        user: {
                            token: res.user.token,
                            email: res.user.email,
                            firstname: res.user.firstname,
                            lastname: res.user.lastname,
                            username: res.user.username,
                            userId: res.user._id,
                            loggedIn: true
                        }
                    })
                }).catch(err => {
                })
            }
        }
    }
    useEffect(() => {
        checkLogin()
    }, [])
    return (
        <div className="navbar navbar-expand-md navbar-dark navbar-static">
            <div className="container-fluid">
                <div id="logo" className="pull-left">
                    <h1 className="slide-right my-1 ml-3"><a href="/" style={{ color: "white" }}>Play To Learn</a></h1>
                </div>
                <nav id="nav-menu-container">
                    <ul className="nav-menu slide-left">
                        {props.user.loggedIn && (
                            <React.Fragment>
                                <li><Link href="/admin"><a>Dashboard</a></Link></li>
                                <li><Link href="/dashboard" ><a>Kết quả kiểm tra</a></Link></li>
                                <li><Link href="/logout" ><a>Đăng xuất</a></Link></li>
                            </React.Fragment>
                        )}
                    </ul>
                </nav>
                {!props.user.loggedIn && (
                    <nav id="nav-menu-container">
                        <ul className="nav-menu slide-left">
                            <React.Fragment>
                                <li className="menu-has-children"><Link href="/login"><a>Đăng nhập</a></Link></li>
                                <li className="menu-has-children"><Link href="/signup"><a>Đăng ký</a></Link></li>
                            </React.Fragment>
                        </ul>
                    </nav>
                )}
            </div >
        </div>
    );
}

const mapStateToProps = (reduxState) => {
    return {
        user: reduxState.user
    }
}


const mapDispatchToProps = (dispatch, props) => {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
