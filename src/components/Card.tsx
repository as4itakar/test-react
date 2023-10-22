import styles from '../styles/Card.module.scss'
import {TiDevicePhone} from 'react-icons/ti'
import {VscMail} from 'react-icons/vsc'
import Line from './Line'
import ICard from '../models/component/ICard'

function Card({fullName, phoneNumber, mail, openModal}: ICard){
    return (
        <article onClick={ () => openModal(fullName)} className={styles.card}>
            <h1 className={styles.cardTitle}>{fullName}</h1>
            <ul className={styles.cardList}>
                <Line text={phoneNumber}><TiDevicePhone className={styles.icon}/></Line>
                <Line text={mail}><VscMail className={styles.icon}/></Line>
            </ul>
        </article>
    )
}

export default Card