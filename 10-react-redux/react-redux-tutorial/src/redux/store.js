import {createStore, applyMiddleware} from 'redux';
import allReducers from './reducers';
import { devToolsEnhancer } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

export default createStore(allReducers, applyMiddleware(thunk));