

class Person2 {
    constructor(public age = 33) {
        this.birthday = this.birthday.bind(this);
    }

    birthday() {
        // will this alway point to the instance of the class? 
        this.age++;
    }

    birthday2 = () => { // stage 3
        this.age++; // this will alway be the class instance
    }
}