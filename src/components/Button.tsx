import React from "react"
import styles from '../styles/Button.module.scss'

interface IButton{
    children: React.ReactNode
}

function Button({children}: IButton){
    return (
        <button type='button' className={styles.button}>{children}</button>
    )
}

export default Button