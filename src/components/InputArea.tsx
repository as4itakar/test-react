import { BiSearch } from "react-icons/bi"
import Button from "./Button"
import Input from "./Input"
import styles from '../styles/InputArea.module.scss'
import IInputArea from "../models/component/IInputArea"

function InputArea({searchFunc, searchValue, setSearchValue}: IInputArea){

    return (
        <section className={styles.inputContainer}>
            <Input searchValue={searchValue} setValue={setSearchValue}/>
            <Button callFunc={searchFunc}><BiSearch/></Button>
        </section>
    )
}

export default InputArea