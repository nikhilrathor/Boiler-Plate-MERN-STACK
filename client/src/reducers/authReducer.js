import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    DELETE_EXPIRED_TEMP_USERS
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
        case DELETE_EXPIRED_TEMP_USERS:
            return{
                ...state
            }
        default:
            return state;
    }
}

export default reducer;