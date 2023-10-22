import styles from '../styles/Button.module.scss'
import IButton from "../models/component/IButton"

function Button({children, callFunc}: IButton){
    return (
        <button onClick={callFunc} type='button' className={styles.button}>{children}</button>
    )
}

export default Button