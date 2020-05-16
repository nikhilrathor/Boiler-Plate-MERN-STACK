import axios from 'axios';
import { returnErrors } from './errorActions';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    DELETE_EXPIRED_TEMP_USERS,
    VERIFY_FAIL,
    VERIFY_SUCCESS
} from './types';

export const register = (user) => dispatch =>{

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    //const body = JSON.stringify({name, email, password});
    axios.post('/api/users/temp-register',user ,config )
    .then(res => dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
    }))
    .catch(err =>{
        dispatch(returnErrors(err.response.data, err.response.status,'REGISTER_FAIL'))
        dispatch({
            type: REGISTER_FAIL
        })
    })
}

export const verify = (user) => dispatch =>{
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    axios.post('/api/users/verify-user',user, config)
    .then(res => dispatch({
        type: VERIFY_SUCCESS,
        payload: res.data
    }))
    .catch(err =>{
        dispatch(returnErrors(err.response.data, err.response.status,'VERIFY_FAIL'))
        dispatch({
            type: VERIFY_FAIL
        })
    })
}

export const deleteUsers = () => dispatch =>{
    axios.delete(`/api/users`)
        .then(res => dispatch({
            type: DELETE_EXPIRED_TEMP_USERS
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
        });
}
