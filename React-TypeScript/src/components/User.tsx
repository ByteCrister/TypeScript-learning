import React from 'react'

type PropsType = {
    user: {
        name: string;
        age: number;
        email: string;
        isLogin: boolean;
        lang: string[];
    }
};

const User = ({ user }: PropsType) => {
    return (
        <div>
            <h2>My name is {user.name}</h2>
            <h3>I'm {user.age} years old.</h3>
            <h4>Email: {user.email}</h4>
            {
                user.isLogin ? <p>User is Registered.</p>
                    : <p>User not Registered.</p>
            }
            <p>Selected languages:
                {
                    user.lang.map((item) => {
                        return <span> {item}</span>
                    })
                }
            </p>
        </div>
    )
}

export default User