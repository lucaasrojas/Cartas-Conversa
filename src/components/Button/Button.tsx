import React from 'react'
import ButtonStyles from "./Button.module.css"
interface ButtonProps {
    text: string
    disabled?: boolean
    onClick: () => void
}

const Button:React.FC<ButtonProps> = ({text, disabled, onClick}) => {
    return (
        <button className={ButtonStyles.button} disabled={disabled} onClick={onClick}>
          {text}
        </button>
    )
}

export default Button