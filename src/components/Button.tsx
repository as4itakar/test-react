import React, { Dispatch, SetStateAction } from "react"
import styles from '../styles/Button.module.scss'

interface IButton{
    children: React.ReactNode,
    callFunc: () => void
}

function Button({children, callFunc}: IButton){
    return (
        <button onClick={callFunc} type='button' className={styles.button}>{children}</button>
    )
}

export default Button