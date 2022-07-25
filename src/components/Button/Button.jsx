import React from "react";
import CSS from './Button.module.css'

const Button = ({ onClick }) => {
    return (
        <button type="submit" onClick={onClick} className={CSS.Button}>Load more</button>
    )
}

export default Button;