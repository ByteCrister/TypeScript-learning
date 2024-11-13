import React from 'react'

type PropsType = {
    children: React.ReactNode
}

const Button = ({ children }: PropsType) => {
    return (
        <button>{children}</button>
    )
}

export default Button


// const Button = ({children} : { children : React.ReactNode}) => {
//     return (
//       <button>Click on the Button</button>
//     )
//   }

// same