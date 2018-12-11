const Observable = require('rxjs').Observable;

const arrayOfItems = [];

const myObservable = Observable.create((observer) => {
    
    console.log('how many times am i running?');
    setInterval(() => {
        arrayOfItems.push()
        observer.next(arrayOfItems);
    }, 1000)
});

myObservable.subscribe(() => {

})

myObservable.subscribe(() => {
    
})