
// number type
enum initialFunctions1 {
    readData = 1,
    getData = 3,
    deleteData
}
console.log(initialFunctions1.deleteData);
console.log(initialFunctions1);

// number type
enum initialFunctions2 {
    readData = 'readData',
    getData = 'getData',
    deleteData = 'deleteData'
}
console.log(initialFunctions2.deleteData);
console.log(initialFunctions2);

// hetergenous type
enum initialFunctions3 {
    readData = 1001,
    getData = 'getData',
    deleteData = 'deleteData'
}
console.log(initialFunctions3.deleteData);
console.log(initialFunctions3);