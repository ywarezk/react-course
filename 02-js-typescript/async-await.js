

async function getTodoTasks() { // Promise<TodoTasks[]>
    let res;
    try {
        res = await fetch('https://nztodo.herokuapp.com/api/task/?format=json');
    } catch(err /* : Error*/) {
        return [];
    }

    // const allResults /* [10, 'sdfg', true] */ = await Promise.all([
    //     promise1, Promise<number>
    //     promise2, Promise<string>
    //     promise3 Promise<boolean>
    // ])

    //const res /*: Response */ = await fetch('https://nztodo.herokuapp.com/api/task/?format=json');
    const json /* : {[key: string] : any}[]*/ = await res.json();
    const todoTasks /* : TodoTasks[]*/ = json.map((task /*: any*/) => {
        return new TodoTask(task)
    }) 

    // throw new Error();

    // globalVar = todoTasks;
    return todoTasks;
}

getTodoTasks().then((tasks /*: TodoTasks[] */) => {

});

getTodoTasks();