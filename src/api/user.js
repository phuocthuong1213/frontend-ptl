import fetch from 'isomorphic-fetch';
import { API_CONFIG } from '../constants/index';
import * as helpers from '../helpers/help'




export const Register = user => {
    console.log(user);
    return fetch(`${API_CONFIG}/auth/signup`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            console.log(response);
            return response.json();
        })
        .catch(err => console.log(err));
};

export const Login = user => {
    return fetch(`${API_CONFIG}/auth/signin`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const signout = next => {
    return fetch(`${API_CONFIG}/auth/signout`, {
        method: 'GET',
    })
        .then(response => {
            helpers.removeCookie('token');
            helpers.removeLocalStorage('user');
        })
        .catch(err => console.log(err));
};


export const checkLoginUser = (data) => {
    return fetch(`${API_CONFIG}/user/requireSignin`, {
        method: 'POST',
        headers: {
            // Accept: 'application/json',
            // Authorization: `Bearer ${token}`
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            helpers.handleResponse(response);
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getListUser = token => {
    return fetch(`${API_CONFIG}/user/list`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const updateUser = (data) => {
    return fetch(`${API_CONFIG}/user/update`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

// autheticate user by pass data to cookie and localstorage
export const authenticate = (data, next) => {
    helpers.setCookie('token', data.token);
    helpers.setLocalStorage('user', data.user);
    next();
};

export const isAuth = () => {
    if (process.browser) {
        const cookieChecked = helpers.getCookie('token');
        if (cookieChecked) {
            if (localStorage.getItem('user')) {
                return JSON.parse(localStorage.getItem('user'));
            } else {
                return false;
            }
        }
    }
};

export const forgotPassword = email => {
    return fetch(`${API_CONFIG}/forgot-password`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(email)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const resetPassword = resetInfo => {
    return fetch(`${API_CONFIG}/reset-password`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(resetInfo)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const loginWithGoogle = user => {
    return fetch(`${API_CONFIG}/google-login`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};













