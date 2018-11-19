"use strict";
// functions
// 1. function()
// function <nameOfFunction?>(arg1, arg2) { ... }
var stam = function myHello(message, myNumber) {
    if (message === void 0) { message = 'hello'; }
    console.log(message);
};
stam('hello', 33);
// stam(10) // error
stam(undefined, 10);
stam(undefined, 10);
// self invoked
(function () {
    console.log('dsfgdsfg');
})();
function stringFunc() {
    return 'hello';
}
