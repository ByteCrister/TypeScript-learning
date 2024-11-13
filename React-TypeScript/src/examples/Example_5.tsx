import React from 'react'
import ButtonStyles from '../components/ButtonStyles'

const Example_5 = () => {
    const btnStyles = { backgroundColor: 'GrayText', border: '1px solid black', margin: '5px', color: 'white' };
    return (
        <div>
            <ButtonStyles btnStyles={btnStyles} />
        </div>
    )
}

export default Example_5