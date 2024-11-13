let user: Array<(string | number)> //same
// let user:(string | number)[];
let reports: boolean[];

// user = [0, 0] //error
user = ['1', '2'];
console.log(...user);