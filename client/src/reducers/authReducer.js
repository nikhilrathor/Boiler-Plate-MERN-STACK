import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    DELETE_EXPIRED_TEMP_USERS,
    VERIFY_FAIL,
    VERIFY_SUCCESS,
    PERMANENT_USER,
    PAYMENT_FAIL,
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    LOGIN_SUCCESS,
    USER_LOADED,
    CHANGE_PASSWORD_FAIL,
    CHANGE_PASSWORD_SUCCESS,
    INIT_CHANGE_PASSWORD
} from '../actions/types';

const initialState = {
    isAuthenticated: null,
    isLoading: false,
    user: null,
    msg: {},
    status: '',
    paymentCompleted: 'false',
    token: localStorage.getItem('token'),
    loggedInUser: false,
    loggedInAdmin: false,
    User: null,
    passwordChanged: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOADED:
            return {
                ...state,
                loggedInUser: action.payload.loggedInUser,
                loggedInAdmin: action.payload.loggedInAdmin,
                User: action.payload
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                User: action.payload.user,
                loggedInUser: action.payload.loggedInUser,
                loggedInAdmin: action.payload.loggedInAdmin
            }
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                User: null,
                loggedInUser: false,
                loggedInAdmin: false
            }
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
            return {
                ...state,
                isAuthenticated: false,
                paymentCompleted: false
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
        case PERMANENT_USER:
            return {
                ...state,
                paymentCompleted: true
            }
        case PAYMENT_FAIL:
            return {
                ...state
            }
        case CHANGE_PASSWORD_SUCCESS:
            return {
                ...state,
                passwordChanged: true
            }
        case INIT_CHANGE_PASSWORD:
        case CHANGE_PASSWORD_FAIL:
            return {
                ...state,
                passwordChanged: false
            }
        default:
            return state;
    }
}

export default reducer;