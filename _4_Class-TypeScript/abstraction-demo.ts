abstract class User {
    userName: string;
    userId: number;
    constructor(userName: string, userId: number) {
        this.userName = userName;
        this.userId = userId;
    }

    abstract display(): void ;
}


class Student extends User {
    studentReg: number
    constructor(userName: string, userId: number, studentReg: number) {
        super(userName, userId);
        this.studentReg = studentReg
    }

    display(): void {
        console.log(`user name : ${this.userName}, user id : ${this.userId}, student reg: ${this.studentReg}`);

    }
};

let student1 = new Student('Shakib', 1, 43);
student1.display();

// let user1 = new User('Shakib', 1); //error