// this in js and ts

class Person {
    constructor(age = 33) {
        this.age = age;
    }

    birthday() {
        // will this alway point to the instance of the class? 
        this.age++;
    }


}

const person = new Person();
person.birthday()
console.log(person.age); // 34

// this is determined at run time
// this can change

const a = {foo: person.birthday};

a['foo']();