import {createStore} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension'
import testReducer from '../../features/sandbox/testReducer';
import { rootReducer } from './rootReducer';

export function configureStore(){
    return createStore(rootReducer, devToolsEnhancer());
}

