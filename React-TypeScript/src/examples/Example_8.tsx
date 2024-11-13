import React, { useState } from 'react'

type User = {
    name: string,
    email: string
}

const Example_8 = () => {
    const [User, setUser] = useState<User>({} as User);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
    };

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        window.alert(JSON.stringify(User, null, 2));
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input type="text" id='name' placeholder='name' onChange={handleInputChange} />
                <input type="email" id='email' placeholder='email' onChange={handleInputChange} />
                <button type='submit'>Create New User</button>
            </form>
        </div>
    )
}

export default Example_8