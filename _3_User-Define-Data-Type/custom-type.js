var Users;
Users = [];
var user1;
user1 = {
    userName: 'sadiqul',
    id: 1
};
Users.push(user1);
Users.push({
    userName: 'shakib',
    id: 2,
    phone: '10101010'
});
for (var key in Users) {
    console.log(Users[key]);
}
// let request : RequestType;
function Axios(request) {
    console.log(request);
}
Axios('GET');
