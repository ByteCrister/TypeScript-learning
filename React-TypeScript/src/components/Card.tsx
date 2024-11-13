import React from 'react'

type PropsType = {
    children: React.ReactNode
}

const Card = ({ children }: PropsType) => {
    return (
        <div style={{ backgroundColor: 'GrayText', border: '1px solid black', margin: '5px' }}>{children}</div>
    )
}

export default Card