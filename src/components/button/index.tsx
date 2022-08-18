import React, { ReactFragment } from "react"
import style from './Button.module.scss'

type Params = {
    type?: "button" | "submit" | "reset" | undefined;
    children?: ReactFragment | undefined;
    onClick?: () => void
}

const Button: React.FC<Params> = (props:Params) =>{
    const { type = "Button", onClick } = props;   
    return(
        <button onClick={onClick} type={props.type} className={style.button}>
            {props.children}
        </button>
    )
}

export default Button;