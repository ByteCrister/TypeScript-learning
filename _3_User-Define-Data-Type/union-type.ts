
// User defined type 

let userId: string | number;
userId = 10
userId = '10'
console.log(userId)


const addNumbers = (...params: (number | string)[]) => {
    return [...params].reduce((s, c) => Number(s) + Number(c), 0);
};

console.log(addNumbers(1, 2, 3, '4'))