import { combineReducers } from 'redux';

import courses from './coursesReducer';
import results from './resultsReducer';
import centres from './centreReducer';
import error from './errorReducer';

const rootReducer = combineReducers({
    courses: courses,
    results: results,
    centres: centres,
    error: error
});

export default rootReducer;