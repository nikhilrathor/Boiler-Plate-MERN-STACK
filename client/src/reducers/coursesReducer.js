import { GET_COURSES, COURSES_LOADING, COURSE_ENQUIRY, COURSE_INFO, COURSE_DESCRIPTION, COURSE_FEES } from '../actions/types';

const initialState = {
    courses: [],
    courseForEnquiry: '',
    courseForDetails: '',
    courseDescription: '',
    courseFees: '',
    loading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COURSES:
            return {
                ...state,
                courses: action.payload,
                loading: false
            }
        case COURSES_LOADING:
            return {
                ...state,
                loading: true
            }
        case COURSE_ENQUIRY:
            localStorage.setItem('courseForEnquiry', action.payload)
            return {
                ...state,
                courseForEnquiry: action.payload,
            }
        case COURSE_INFO:
            localStorage.setItem('courseInfo', action.payload)
            return {
                ...state,
                courseForDetails: action.payload
            }
        case COURSE_DESCRIPTION:
            return {
                ...state,
                courseDescription: action.payload.description
            }
        case COURSE_FEES:
            return {
                ...state,
                courseFees: action.payload.fees
            }    
        default:
            return state;
    }
}

export default reducer;