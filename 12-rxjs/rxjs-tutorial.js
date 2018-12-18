"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// rxjs
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
// Promise
// const myTimerPromise: Promise<string> = new Promise((resolve, reject) => {
//     console.log('is async function in promise running if there are no listeners');
//     setTimeout(function() {
//         resolve('hello world');
//         // reject(new Error('something happened'))
//     }, 1000)
// });
// myTimerPromise.then((msg: string) => {
//     console.log(msg);
// }, function(err: Error) {
//     console.log('this will jump when promise rejects');    
// });
// myTimerPromise.then();
// // Observable
// const myIntervalObservable: Observable<number> = Observable.create((observer: any) => {
//     console.log('!!!!is async function in observable is running if there are no listeners');
//     let counter = 0;
//     const myIntervalId = setInterval(function() {
//         console.log('set interval is still running');
//         observer.next(counter);
//         counter++;
//         if (counter > 5) {
//             // observer.error(new Error('error in observable'));
//             observer.complete();
//         }
//     }, 1000)
//     return function() {
//         // this will be called every time data stream closes
//         clearInterval(myIntervalId);
//     }
// });
// const mySubscription: Subscription = myIntervalObservable.subscribe(function(num: number) {
//     // this will be called every time next is called
//     console.log(num);
// }, function(err: Error) {
//     // this will be called when observable sends error
//     console.log(err.message);
// }, function() {
//     console.log('data stream is completed');
// });
// const mySubscription2: Subscription = myIntervalObservable.subscribe();
// // Observable VS Promise
// // observable has multiple pulses
// // promise has a single pulse.
// // Observable VS Promise
// // Observable is lazy - no listeners, no running async function
// // Promise is eager - running async function even if there are no listeners
// // Observable VS Promise
// // Promise runs async code once for many listeners
// // Observable duplicated async code for every listeners -> duplicated data stream for each listener.
// // closing data stream
// // complete
// // error
// // unsubscribe
// // Observable VS Promise
// // observable is cancelable
// // promise is not cancelable
// setTimeout(() => {
//     console.log('disconnect first');
//     mySubscription.unsubscribe();
// }, 2000)
// setTimeout(() => {
//     console.log('disconnect second');
//     mySubscription2.unsubscribe();
// }, 3000)
// // observable can cause memorty leaks
// // memory leaks can be either is the async function
// // when not calling unsubscribe from inifinite observable
// // router events im subscribing to them, my component is destroyed, and I didn't unsubscribe
// // Subject
// // represents data stream
// // data stream is not duplicated for every listener
// // no async function - next error complete are called from the instance.
// const myIntervalSubject: Subject<number> = new Subject();
// myIntervalSubject.next(0);
// myIntervalSubject.next(1);
// myIntervalSubject.next(2);
// let counter2 = 0;
// setInterval(() => {
//     myIntervalSubject.next(counter2);
//     counter2++;
// });
// const mySubjectSubscription: Subscription =  myIntervalObservable.subscribe(() => {
//     console.log('listener');
// });
// mySubjectSubscription.unsubscribe();
// myIntervalSubject.unsubscribe();
// const myIntervalSubject2: BehaviorSubject<number> = new BehaviorSubject(50);
// Operators
// toolbox to solve async problems
// operators can create new data stream
// operator can manipulate data stream
// 1- identify that my async problem happened with more developers
// 2- there is a bunch of perators that can help me solve my problem
// 3- understand the category of the transformation
// creating data stream with operators
// interval
// 0 .. 1 .. 2 .. 3
var myIntervalObservableOperator = rxjs_1.interval(1000);
// myIntervalObservableOperator.subscribe((pulse: number) => {
//     console.log(pulse);
// });
// from
// iterables like array
rxjs_1.from([2, 4, 6]);
// of
// observable with one pulse with the data
// Observable<string>
rxjs_1.of('hello world');
rxjs_1.of([2, 4, 6]);
// transforming operators
// data stream with type a => data stream with type b
// Observable<number> => Observable<string>
// map
// Observable<number> => Observable<string>
myIntervalObservableOperator.pipe(operators_1.filter(function (counter) { return counter % 2 === 0; }), operators_1.map(function (counter) { return 'hello'; }), operators_1.debounceTime(2000), operators_1.distinctUntilChanged()).subscribe(function (zogy) {
    console.log(zogy);
});
// filter
// debounceTime
// i have a pulse A then i have a pulse B
// what is the delta time between A and B
// if the time is lower then t then ignore pulse A
// distinctUntilChanged
// i have pulse A then I have pulse B
// if A === B then throw B
