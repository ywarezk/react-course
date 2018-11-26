

const myFirstPrototype = {
    isLoading: true
}

const myChild = Object.create(myFirstPrototype)

myChild.__proto__ === myFirstPrototype 

myChild.isLoading === true // myFirstPrototype[isLoading] 

myFirstPrototype[isLoading] = false;

myChild.isLoading === false;

myChild.isLoading = true;

const myChild2 = Object.create(myFirstPrototype)
myChild2.isLoading === false;

// delete myChild.isLoading


Object.prototype

function Person(age) {
    this.age = age
    this.sayHello = function() {

    }
}

Person.prototype.sayHello1 = function() {

}

const person = new Person(33);
const person2 = new Person(31);
person.sayHello === person2.sayHello // false
person.sayHello1 === person2.sayHello1 // true

class Person1{
    constructor(age) {
        this.age = age
    }

    sayHello1() {

    }
}

const person1 = new Person1(33);

const stam = {hello: 'world', foo: 'bar'}

// stam.yariv = 'kazt'

Object.defineProperty(stam, 'yariv', {
    enumerable: false,
    value: 'katz'
})

for (let item in stam) {
    if (stam.hasOwnProperty(item)) {
        
    }
    console.log();
}

Object.keys(stam) // ['hello', 'foo']

//Object.defineProperty

