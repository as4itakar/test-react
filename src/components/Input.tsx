import { Dispatch, SetStateAction, SyntheticEvent } from 'react'
import styles from '../styles/Input.module.scss'

interface IInput{
    searchValue: string,
    setValue: Dispatch<SetStateAction<string>>
}

function Input({searchValue, setValue}: IInput){
    return(
        <input value={searchValue} onChange={(e) => setValue(e.target.value)} className={styles.inputField} type="text" />
    )
}

export default Input