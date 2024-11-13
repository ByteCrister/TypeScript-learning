import React from 'react'
import User from '../components/User';

const Example_1 = () => {
    const user1 = {
        name: 'Sadiqul',
        age: 22,
        email: 'email@gmail.com',
        isLogin: true,
        lang: ['Bangla', 'English', 'Hindi']
    };
    const user2 = {
        name: 'Islam Shakib',
        age: 12,
        email: 'emailemail@gmail.com',
        isLogin: false,
        lang: ['English', 'Hindi']
    };


    return (
        <div>
            <h2>User Management</h2>
            <User user={user1} />
            <User user={user2} />
        </div>
    )
}

export default Example_1