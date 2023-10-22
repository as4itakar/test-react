import { Dispatch, SetStateAction } from 'react'
import styles from '../styles/Input.module.scss'
import IInput from '../models/component/IInput'

function Input({searchValue, setValue}: IInput){
    return(
        <input value={searchValue} onChange={(e) => setValue(e.target.value)} className={styles.inputField} type="text" />
    )
}

export default Input