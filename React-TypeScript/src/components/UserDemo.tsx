import React from 'react'

type PropsType = {
    users: {
        name: string;
        age: number;
        email: string;
        isLogin: boolean;
        lang: string[];
    }[]
};

const UserDemo = ({ users }: PropsType) => {
    return (
        <div>
            {
                users.map((user) => {
                    return <div>
                        <h2>Name: {user.name}</h2>
                        <h2>{user.name} is {user.age} year's old.</h2>
                        <h3>Email: {user.email}</h3>
                        <span> {user.isLogin ? 'User logged in.' : 'User is not logged in.'}</span>
                    </div>
                })
            }
        </div>
    )
}

export default UserDemo