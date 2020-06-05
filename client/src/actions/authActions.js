import axios from 'axios';
import { returnErrors } from './errorActions';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    DELETE_EXPIRED_TEMP_USERS,
    VERIFY_FAIL,
    VERIFY_SUCCESS,
    PERMANENT_USER,
    PAYMENT_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    CHANGE_PASSWORD_SUCCESS,
    CHANGE_PASSWORD_FAIL,
    INIT_CHANGE_PASSWORD
} from './types';

export const register = (user) => dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    //const body = JSON.stringify({name, email, password});
    axios.post('/api/users/temp-register', user, config)
        .then(res => dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'))
            dispatch({
                type: REGISTER_FAIL
            })
        })
}

export const verify = (user) => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    axios.post('/api/users/verify-user', user, config)
        .then(res => dispatch({
            type: VERIFY_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'VERIFY_FAIL'))
            dispatch({
                type: VERIFY_FAIL
            })
        })
}

export const deleteUsers = () => dispatch => {
    axios.delete(`/api/users`)
        .then(res => dispatch({
            type: DELETE_EXPIRED_TEMP_USERS
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
        });
}

export const permanentUser = (user) => dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    //const body = JSON.stringify({name, email, password});
    axios.post('/api/users/final-register', user, config)
        .then(res => dispatch({
            type: PERMANENT_USER,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'PAYMENT_FAIL'))
            dispatch({
                type: PAYMENT_FAIL
            })
        })
}

export const loadUser = () => (dispatch, getState) => {

    axios.get('/api/users/user', tokenConfig(getState))
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
            dispatch({
                type: AUTH_ERROR
            })
        })

}

export const login = (user) => dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    axios.post('/api/users/login', user, config)
        .then(res => dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'))
            dispatch({
                type: LOGIN_FAIL
            })
        })
}

export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    }
}

export const changePassword = (user) => (dispatch, getState) => {

    axios.post('/api/users/changePassword', user, tokenConfig(getState))
        .then(res => dispatch({
            type: CHANGE_PASSWORD_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'CHANGE_PASSWORD_FAIL'))
            dispatch({
                type: CHANGE_PASSWORD_FAIL
            })
        })
}

export const tokenConfig = getState => {

    const token = localStorage.getItem('token');

    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    if (token) {
        config.headers['x-auth-token'] = token;
    }

    return config;
}

export const initChangePassword = () => dispatch => {
    dispatch({
        type: INIT_CHANGE_PASSWORD
    })
}