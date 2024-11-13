import React, { useState } from 'react'

const Example_7 = () => {
    const [UserName, setUserName] = useState<string | null>(null);
    const [isClicked, setIsClicked] = useState(false);

    const handleInputNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    };

    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setIsClicked(prev => !prev);
    };

    return (
        <div>
            <h2>Create New User</h2>
            <input type="text" placeholder='user name' onChange={handleInputNameChange} />
            <button onClick={handleButtonClick}>Show</button>
            {isClicked ? <p>{UserName}</p> : null}
        </div>
    )
}

export default Example_7