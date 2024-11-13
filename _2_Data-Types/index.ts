
// build in : string, number, boolean, null, undefined, void

let User: object;
let isActive: boolean;
let userName: string;
let age: number;
let orders: object[];

const returnUser = (isActive: boolean, userName: string, age: number, orders: object[]) => {
    User = {
        isActive,
        userName,
        age,
        orders
    };
    return User;
};

console.log(returnUser(true, 'Shakib', 22, [{ 1: 1, 2: 2, 3: 3 }]));