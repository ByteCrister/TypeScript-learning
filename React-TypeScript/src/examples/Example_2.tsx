import React from 'react'
import UserDemo from '../components/UserDemo';

const Example_2 = () => {
    const users = [
        {
            name: 'Sadiqul',
            age: 22,
            email: 'email@gmail.com',
            isLogin: true,
            lang: ['Bangla', 'English', 'Hindi']
        },
        {
            name: 'Islam Shakib',
            age: 12,
            email: 'emailemail@gmail.com',
            isLogin: false,
            lang: ['English', 'Hindi']
        }
    ];

    return (
        <div>
            <h1>User Information's</h1>
            <UserDemo users={users}/>
        </div>
    )
}

export default Example_2