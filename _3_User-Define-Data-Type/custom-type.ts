
type User = { userName: string, id: number, phone?: string | number };
let Users: User[];
Users = [];

let user1: User;
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

for (const key in Users) {
    console.log(Users[key]);
}

type RequestType  = 'GET' | 'POST';
// let request : RequestType;

function Axios(request: RequestType){
    console.log(request);
}
Axios('GET');