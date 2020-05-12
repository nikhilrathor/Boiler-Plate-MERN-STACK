import { CENTRE_INFO, GET_ALL_CENTRES, GET_CENTRE_BY_PLACE, GET_CENTRES_BY_COURSE } from '../actions/types';

const initialState = {
    allCentres: [],
    centreForDetails: '',
    centreDetails: {},
    centreCourses: [],
    centresByCourse: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CENTRE_INFO:
            localStorage.setItem('centreForDetails', action.payload)
            return {
                ...state,
                centreForDetails: action.payload
            }
        case GET_ALL_CENTRES:
            return {
                ...state,
                allCentres: action.payload
            }
        case GET_CENTRE_BY_PLACE:
            return {
                ...state,
                centreDetails: action.payload,
                centreCourses: action.payload.courseOffered
            }
        case GET_CENTRES_BY_COURSE:
            return {
                ...state,
                centresByCourse: action.payload
            }
        default:
            return state;
    }
}

export default reducer;