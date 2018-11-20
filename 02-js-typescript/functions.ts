

// functions

// 1. function()

// function <nameOfFunction?>(arg1, arg2) { ... }

const stam = function myHello(message: string = 'hello', myNumber : number) : void {
    console.log(message);
}

stam('hello', 33);
// stam(10) // error
stam(undefined, 10);

stam(undefined, 10);


// self invoked
(function() {
    console.log('dsfgdsfg');
})();

function stringFunc() : string {
    return 'hello';
}

