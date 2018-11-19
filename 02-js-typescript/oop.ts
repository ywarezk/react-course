

class Person {
    private _stam : string = 'sdafasdf'

    constructor(public age : number) {
        
    }

    sayHello() {
        console.log(`hi my name is yariv my age is: ${this.age}`)
    }
}

const person : Person = new Person(33);
person.sayHello();

class Student extends Person {
    constructor(private grade : number = 100, age: number) {
        super(age);

        // Object.defineProperty(this, 'chaim', {
        //     enumerable: false,

        // })
    }

    sayHello() {
        super.sayHello();
        console.log('student');
    }

    private calculate() : number {
        return Math.pow(this.grade, 3);
    }
}

const student : Student = new Student(10, 33);
(<any>student).calculate();
(student as any).calculate();


abstract class Pokemon {

}

// const pikachu : Pokemon = new Pokemon();

class WaterPokemon extends Pokemon {

}

const squirtel : Pokemon = new WaterPokemon();

interface HasLength {
    length : number;
}

const myNumberArray3 : HasLength = [];
const myString : HasLength = 'hello';

enum Color {
    RED = 5,
    BLUE = 'sdfa',
    PURPLE = 10
}


class MySingleTone {
    static _instance : MySingleTone;

    private constructor() {

    }

    static getInstance() : MySingleTone {
        if (this._instance) {
            return this._instance;
        }
        this._instance = new this();
        return this._instance;
    }
}

class Studend3<T extends string | number> {
    constructor(grade : T) {}
}

const studentWithStringGrade : Studend3<string> = new Studend3('A+');






