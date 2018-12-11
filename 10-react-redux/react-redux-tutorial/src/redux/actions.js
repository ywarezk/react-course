

export const ADD_TASK: string = 'ADD_TASK';
export const SET_TASKS: string = 'SET_TASKS';

export function addTask(item: string) {
    return {type: ADD_TASK, payload: item};
}

export function setTasksFromServer(tasksFromServer) {
    return {type: SET_TASKS, payload: tasksFromServer}
}


export function requestTasksFromServer() {
    return async function(dispatch) {
        const res = await fetch('https://nztodo.herokuapp.com/api/task/?format=json');
        const json = await res.json();
        dispatch(setTasksFromServer(json));
    }
}
