import React, { useState } from 'react';

// Define the User type for better type safety
type User = {
    id: number;
    name: string;
    email: string;
};

// Define the state type
type UserStateType = {
    UserStore: User[];
    UsersData: User[];
    filteredData: User[];
};

const Example_6 = () => {
    // Initialize state with type safety
    const [Users, setUser] = useState<UserStateType>({
        UserStore: [],
        UsersData: [],
        filteredData: [],
    });

    // Example function to add a user
    const handleAddUser = () => {
        setUser((prevState) => ({
            ...prevState,
            UserStore: [
                ...prevState.UserStore,
                { id: prevState.UserStore.length + 1, name: 'John Doe', email: 'john@example.com' },
            ],
        }));
    };

    return (
        <div>
            <button onClick={handleAddUser}>Add User</button>
            {Users.UserStore && Users.UserStore.length > 0 ? (
                Users.UserStore.map((item, index) => (
                    <div key={index}>
                        <p>Name: {item.name}</p>
                        <p>Email: {item.email}</p>
                    </div>
                ))
            ) : (
                <p>No users available</p>
            )}
        </div>
    );
};

export default Example_6;