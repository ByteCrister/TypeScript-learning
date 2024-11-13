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
var user1 = new User('shakib', 1);
user1.display();
