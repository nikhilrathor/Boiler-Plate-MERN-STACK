import { GET_ALL_RESULTS, GET_COURSE_RESULTS } from '../actions/types';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_RESULTS:
        case GET_COURSE_RESULTS:
            return {
                ...state,
                results: action.payload
            }
        default:
            return state;
    }
}

export default reducer;