var fun1;
var fun2;
var fun3;
fun1 = function () {
    console.log('fun1 called..');
};
fun2 = function (name) {
    return name;
};
fun3 = function (name, id) {
    return Number(id);
};
fun1();
console.log(fun2('Shakib'));
console.log(fun3('Shakib', 20));
