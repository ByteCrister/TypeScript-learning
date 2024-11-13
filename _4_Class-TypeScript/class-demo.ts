class User {
    userName: string;
    userId: number;
    constructor(userName: string, userId: number) {
        this.userName = userName;
        this.userId = userId;
    }

    display(): void {
        console.log(`user name : ${this.userName}, user id : ${this.userId}`);
    }
}

let user1 = new User('shakib', 1);
user1.display();