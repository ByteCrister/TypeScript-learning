var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(userName, userId) {
        this.userName = userName;
        this.userId = userId;
    }
    User.prototype.display = function () {
        console.log("user name : ".concat(this.userName, ", user id : ").concat(this.userId));
    };
    return User;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(userName, userId, studentReg) {
        var _this = _super.call(this, userName, userId) || this;
        _this.studentReg = studentReg;
        return _this;
    }
    Student.prototype.display = function () {
        console.log("user name : ".concat(this.userName, ", user id : ").concat(this.userId, ", student reg: ").concat(this.studentReg));
    };
    return Student;
}(User));
;
var student1 = new Student('Shakib', 1, 43);
student1.display();
