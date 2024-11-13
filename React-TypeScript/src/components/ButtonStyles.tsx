import React from 'react'

type PropsType = {
    btnStyles : React.CSSProperties
}

const ButtonStyles = ({btnStyles} : PropsType) => {
  return (
    <button style={btnStyles}>Click on the button</button>
  )
}

export default ButtonStyles