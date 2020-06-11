import { GET_COURSES, COURSES_LOADING, COURSE_ENQUIRY, COURSE_INFO, COURSE_DESCRIPTION, COURSE_FEES } from './types';
import { returnErrors } from './errorActions';
import axios from 'axios';

export const getCourses = () => dispatch => {
    dispatch(setCoursesLoading());
    axios.get('/api/courses').then(res => {
        console.log(res.data);
        dispatch({
            type: GET_COURSES,
            payload: res.data
        })
    })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
        });
}

export const courseForEnquiry = (course) => dispatch => {
    dispatch({
        type: COURSE_ENQUIRY,
        payload: course
    })
}

export const courseInfo = (course) => dispatch => {
    dispatch({
        type: COURSE_INFO,
        payload: course
    })
}

export const courseDescription = (course) => dispatch => {
    axios.get(`/api/courses/description/${course}`).then(res =>
        dispatch({
            type: COURSE_DESCRIPTION,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
        });
}

export const courseFees = (course) => dispatch => {
    axios.get(`/api/courses/fees/${course}`).then(res =>
        dispatch({
            type: COURSE_FEES,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
        });
}

export const setCoursesLoading = () => {
    return {
        type: COURSES_LOADING
    }
}