import axios from 'axios';
import { returnErrors } from './errorActions';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL
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
