"use strict";
var Person2 = /** @class */ (function () {
    function Person2(age) {
        if (age === void 0) { age = 33; }
        var _this = this;
        this.age = age;
        this.birthday2 = function () {
            _this.age++; // this will alway be the class instance
        };
        this.birthday = this.birthday.bind(this);
    }
    Person2.prototype.birthday = function () {
        // will this alway point to the instance of the class? 
        this.age++;
    };
    return Person2;
}());
