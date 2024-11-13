// -------------------- -----------------
// let userName: string;
// userName = 'Sadiqul Islam Shakib';
// // userName = 'true' :executed
// // userName = '123' :executed
// // userName = '[1,2]' :executed

// // userName = 123; :error
// // userName = true; :error
// // userName = [1,2]; :error

// console.log(userName);
// console.log(10);
// -------------------- -----------------

// -------------------- -----------------
const addNumbers = (num1: number, ...params: number[]) => {
    return [...params, num1].reduce((s, c) => s + c, 0);
}
console.log(addNumbers(1, 2, 3, 4));
// -------------------- -----------------