import {
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from '../actions/types';

const initialState = {
    isAuthenticated: null,
    isLoading: false,
    user: null,
    msg: {},
    status: ''
}

const reducer = (state=initialState,action) =>{
    switch(action.type){
        case REGISTER_SUCCESS:
            return {
                ...state,
                msg: action.payload.msg,
                status: 'temp'
            }
        case REGISTER_FAIL:
            return {
                ...state,
                user: null,
                status: '',
                msg: {}
            }
        default:
            return state;
    }
}

export default reducer;