import { GET_COURSE_RESULTS, GET_ALL_RESULTS} from './types';
import { returnErrors } from './errorActions';
import axios from 'axios';

export const getAllResults = () => dispatch => {
    axios.get('/api/results').then(res =>
        dispatch({
            type: GET_ALL_RESULTS,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
        });
}

export const getCourseResults = (course) => dispatch => {
    axios.get(`/api/results/${course}`).then(res =>
        dispatch({
            type: GET_COURSE_RESULTS,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
        });
}
