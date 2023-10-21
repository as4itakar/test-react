import styles from '../styles/Modal.module.scss'
import {IoClose} from 'react-icons/io5'

function ModalContent(){

    return (
        <section className={styles.modalContainer}>
            <article className={styles.titleContainer}>
                <h1 className={styles.modalTitle}>Евгений Савченко</h1>
                <button className={styles.closeBtn} type='button'><IoClose/></button>
            </article>
            <article className={styles.listContainer}>
                <ul className={[styles.modalList, styles.left].join(' ')}>
                    <li>Телефон:</li>
                    <li>Почта:</li>
                    <li>Дата приема:</li>
                    <li>Должность:</li>
                    <li>Подразделение:</li>
                </ul>
                <ul className={[styles.modalList, styles.right].join(' ')}>
                    <li>87123681</li>
                    <li>mail.ru</li>
                    <li>15.10.2023</li>
                    <li>Дизайнер</li>
                    <li>Кайфарики</li>
                </ul>
            </article>
            <article className="infoContainer">
                <h1 className={styles.infoTitle}>Дополнительная информация:</h1>
                <p className={styles.modalParagraph}>ЭЩКЕРЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕ</p>
            </article>
        </section>
    )
}

export default ModalContent