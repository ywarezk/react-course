"use strict";
// promise
// 
var myStrPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('hello world');
        // resolve(10);
        // resolve('dfgsdfg');
        // reject(new Error('stam error'))
    }, 1000);
});
myStrPromise.then(function (msg) {
    console.log(msg);
}, function (err) {
});
