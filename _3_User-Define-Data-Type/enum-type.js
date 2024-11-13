// number type
var initialFunctions1;
(function (initialFunctions1) {
    initialFunctions1[initialFunctions1["readData"] = 1] = "readData";
    initialFunctions1[initialFunctions1["getData"] = 3] = "getData";
    initialFunctions1[initialFunctions1["deleteData"] = 4] = "deleteData";
})(initialFunctions1 || (initialFunctions1 = {}));
console.log(initialFunctions1.deleteData);
console.log(initialFunctions1);
// number type
var initialFunctions2;
(function (initialFunctions2) {
    initialFunctions2["readData"] = "readData";
    initialFunctions2["getData"] = "getData";
    initialFunctions2["deleteData"] = "deleteData";
})(initialFunctions2 || (initialFunctions2 = {}));
console.log(initialFunctions2.deleteData);
console.log(initialFunctions2);
// hetergenous type
var initialFunctions3;
(function (initialFunctions3) {
    initialFunctions3[initialFunctions3["readData"] = 1001] = "readData";
    initialFunctions3["getData"] = "getData";
    initialFunctions3["deleteData"] = "deleteData";
})(initialFunctions3 || (initialFunctions3 = {}));
console.log(initialFunctions3.deleteData);
console.log(initialFunctions3);
