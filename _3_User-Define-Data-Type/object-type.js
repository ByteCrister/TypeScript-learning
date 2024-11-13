var users;
users = [];
var user;
user = {
    userName: 'shakib',
    id: 43
};
users.push(user);
user = {
    userName: 'sadiqul',
    id: 22,
    phone: '1010'
};
users.push(user);
for (var index in users) {
    console.log(users[index]);
}
