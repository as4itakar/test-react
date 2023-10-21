import React, { Dispatch, SetStateAction } from "react"
import styles from '../styles/Button.module.scss'

interface IButton{
    children: React.ReactNode,
    searchUser: () => void
}

function Button({children, searchUser}: IButton){
    return (
        <button onClick={searchUser} type='button' className={styles.button}>{children}</button>
    )
}

export default Button