import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    DELETE_EXPIRED_TEMP_USERS,
    VERIFY_FAIL,
    VERIFY_SUCCESS
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
        case VERIFY_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload
            }
        case VERIFY_FAIL:
            return {
                ...state,
                isAuthenticated: false,
                user: null
            }
        default:
            return state;
    }
}

export default reducer;