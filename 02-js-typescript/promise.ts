// promise

// 
const myStrPromise : Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('hello world');

        // resolve(10);
        // resolve('dfgsdfg');

        //reject(new Error('stam error'))
    }, 1000);
});

const promise2 : Promise<void | number> = myStrPromise.then(
    function(msg : string) { // resolved
        console.log(msg);
    }, 
    function (err : Error) { // rejected
        return 42;
    }
)

promise2.then((item : void | number) => item)

// https://nztodo.herokuapp.com/api/task/?format=json

fetch('https://nztodo.herokuapp.com/api/task/?format=json') // Promise<Response>
    .then((res : Response) => { // Promise<json>
        return res.json(); // Promise<any>
    })
    .then((json) => { // Promise<TodoTask[]>
        return json.map((task : any) => {
            return new TodoTask(task)
        })
    })

// promise chaining

promise1
    .then(() => {
        //return fetch()
        //throw new Error();
    })
    .catch(() => {
        throw new Error()
    })
    .then()
    .then()
    .then()
    .catch(() => {

    })


    fetch('https://nztodo.herokuapp.com/api/task/?format=json') // Promise<Response>
    .then((res : Response) => { // Promise<json>
        return res.json();
    })
    .then((json) => { // Promise<TodoTask[]>
        return json.map((task : any) => {
            return new TodoTask(task)
        })
    })
    .catch((myErr: Error) => {        
        return [];
    })