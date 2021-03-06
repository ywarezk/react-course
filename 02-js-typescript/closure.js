function withName() {
    var name = 'bugeez.io';
    return function sayHello(newName) {
        name = `hello world ${newName}`;
        return name;
    }
}

let nerdeez = withName();
let bugeez = withName();

console.log(nerdeez('nerdeez'));
console.log(bugeez('bugeez'));
console.log(global.name);

console.log('!!!!!');

function withName2() {
    return function sayHello(newName) {
        name = `hello world ${newName}`;
        return name;
    }
}

let nerdeez = withName2();
let bugeez = withName2();

console.log(nerdeez('nerdeez'));
console.log(bugeez('bugeez'));
console.log(global.name);

function withName3() {
    return function sayHello(newName) {
        "use strict"
        name = `hello world ${newName}`;
        return name;
    }
}

let nerdeez = withName3();
let bugeez = withName3();


console.log(nerdeez('nerdeez'));
console.log(bugeez('bugeez'));
console.log(window.name);


function printThis() {
    "use strict"
    console.log(this);
}
printThis();