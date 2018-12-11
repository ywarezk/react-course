import {combineReducers} from 'redux';
import reducerTodo from './todo-reducer';

export default combineReducers({
    todo: reducerTodo
})
