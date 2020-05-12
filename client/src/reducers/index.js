import { combineReducers } from 'redux';

import courses from './coursesReducer';
import results from './resultsReducer';
import centres from './centreReducer';

const rootReducer = combineReducers({
    courses: courses,
    results: results,
    centres: centres
});

export default rootReducer;