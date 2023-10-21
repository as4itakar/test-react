import styles from '../styles/Card.module.scss'
import {TiDevicePhone} from 'react-icons/ti'
import {VscMail} from 'react-icons/vsc'
import Line from './Line'

function Card(){
    return (
        <article className={styles.card}>
            <h1 className={styles.cardTitle}>Евгений Савченко</h1>
            <ul className={styles.cardList}>
                <Line text='8756805985'><TiDevicePhone className={styles.icon}/></Line>
                <Line text='ahsgdjashgd@gmail.com'><VscMail className={styles.icon}/></Line>
            </ul>
        </article>
    )
}

export default Card