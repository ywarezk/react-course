"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(age) {
        this.age = age;
        this._stam = 'sdafasdf';
    }
    Person.prototype.sayHello = function () {
        console.log("hi my name is yariv my age is: " + this.age);
    };
    return Person;
}());
var person = new Person(33);
person.sayHello();
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(grade, age) {
        if (grade === void 0) { grade = 100; }
        var _this = _super.call(this, age) || this;
        _this.grade = grade;
        return _this;
        // Object.defineProperty(this, 'chaim', {
        //     enumerable: false,
        // })
    }
    Student.prototype.sayHello = function () {
        _super.prototype.sayHello.call(this);
        console.log('student');
    };
    Student.prototype.calculate = function () {
        return Math.pow(this.grade, 3);
    };
    return Student;
}(Person));
var student = new Student(10, 33);
student.calculate();
student.calculate();
var Pokemon = /** @class */ (function () {
    function Pokemon() {
    }
    return Pokemon;
}());
// const pikachu : Pokemon = new Pokemon();
var WaterPokemon = /** @class */ (function (_super) {
    __extends(WaterPokemon, _super);
    function WaterPokemon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return WaterPokemon;
}(Pokemon));
var squirtel = new WaterPokemon();
var myNumberArray3 = [];
var myString = 'hello';
var Color;
(function (Color) {
    Color[Color["RED"] = 5] = "RED";
    Color["BLUE"] = "sdfa";
    Color[Color["PURPLE"] = 10] = "PURPLE";
})(Color || (Color = {}));
var MySingleTone = /** @class */ (function () {
    function MySingleTone() {
    }
    MySingleTone.getInstance = function () {
        if (this._instance) {
            return this._instance;
        }
        this._instance = new this();
        return this._instance;
    };
    return MySingleTone;
}());
var Studend3 = /** @class */ (function () {
    function Studend3(grade) {
    }
    return Studend3;
}());
var studentWithStringGrade = new Studend3('A+');
