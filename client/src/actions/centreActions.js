import { CENTRE_INFO, GET_ALL_CENTRES, GET_CENTRE_BY_PLACE, GET_CENTRES_BY_COURSE } from './types';
import { returnErrors } from './errorActions';
import axios from 'axios';

export const centreInfo = (centre) => dispatch =>{
    dispatch({
        type: CENTRE_INFO,
        payload: centre
    })
}

export const getAllCentres = () => dispatch => {
    axios.get('/api/centre').then(res =>
        dispatch({
            type: GET_ALL_CENTRES,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
        });
}

export const getCentreByPlace = (place) => dispatch => {
    axios.get(`/api/centre/place/${place}`).then(res =>
        dispatch({
            type: GET_CENTRE_BY_PLACE,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
        });
}

export const getCentresByCourse = (course) => dispatch => {
    axios.get(`/api/centre/course/${course}`).then(res =>
        dispatch({
            type: GET_CENTRES_BY_COURSE,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
        });
}