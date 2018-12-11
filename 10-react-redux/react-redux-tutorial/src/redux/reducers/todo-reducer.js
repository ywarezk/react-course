
import {ADD_TASK, SET_TASKS} from '../actions';

// export interface ITodoState {
//     todos: string[]  
// }

const initialTodoState: ITodoState = {
    todos: [],
    todosFromServer: [] // {title: 'df', description: 'dfg'}[]
}

export default function reducerTodo(state: ITodoState = initialTodoState, action) { 
    switch(action.type) {
        case ADD_TASK:
            // const newArray = [...state.todos, action.payload];            
            return {...state, todos: state.todos.concat([action.payload])};            
        case SET_TASKS:
            return {...state, todosFromServer: action.payload}; 
        default:
            return state;
    }
}