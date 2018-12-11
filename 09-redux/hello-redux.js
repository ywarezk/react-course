
// actions

function addTask(item) {
    return {type: 'ADD_TASK', payload: item};
}

// reducer

const initialTodoState = {
    todos: []
}

/**
   { todos: []}
 * @returns: nextState
 */
function reducerTodo(state = initialTodoState, action) { 
    switch(action.type) {
        case 'ADD_TASK':
            // const newArray = [...state.todos, action.payload];            
            return {...state, todos: state.todos.concat([action.payload])}
            // return {todos: state.todos.concat([action.payload])}
        default:
            return state;
    }
}

// store

const allReducers = Redux.combineReducers({todo: reducerTodo});

const store = Redux.createStore(allReducers);


function submitForm(event) {
    event.preventDefault();
    const inputDomElement = document.getElementById('new-task');
    store.dispatch(addTask(inputDomElement.value))

    //store.dispatch({type: 'ADD_TASK', payload: inputDomElement.value});
}

//
store.subscribe(() => {
    const ul = document.getElementById('task-list');

    // clean ul
    ul.innerHTML = '';

    // add li items like the todos array
    const state = store.getState();
    const todos = state.todo.todos;
    for (let todo of todos) {
        const li = document.createElement('li');
        li.innerText = todo;
        ul.appendChild(li);
    }
});