
let users: object[];
users = [];

let user: { userName: string, id: number, phone?: string | number };
user = {
    userName: 'shakib',
    id: 43
}

users.push(user);

user = {
    userName: 'sadiqul',
    id: 22,
    phone: '1010'
}

users.push(user);

for (const index in users) {
    console.log(users[index]);
}