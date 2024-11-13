// build in : string, number, boolean, null, undefined, void
var User;
var isActive;
var userName;
var age;
var orders;
var returnUser = function (isActive, userName, age, orders) {
    User = {
        isActive: isActive,
        userName: userName,
        age: age,
        orders: orders
    };
    return User;
};
console.log(returnUser(true, 'Shakib', 22, [{ 1: 1, 2: 2, 3: 3 }]));
