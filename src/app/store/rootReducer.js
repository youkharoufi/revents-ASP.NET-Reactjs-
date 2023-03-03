import {combineReducers} from 'redux';
import testReducer from '../../features/sandbox/testReducer';
import eventReducer from '../../features/events/eventReducer';

export const rootReducer = combineReducers({
    test: testReducer,
    event: eventReducer
})