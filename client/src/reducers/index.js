import { combineReducers } from 'redux';

import courses from './coursesReducer';
import results from './resultsReducer';
import centres from './centreReducer';
import error from './errorReducer';
import auth from './authReducer';

const rootReducer = combineReducers({
    courses: courses,
    results: results,
    centres: centres,
    error: error,
    auth: auth
});

export default rootReducer;