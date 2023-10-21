import { Dispatch, SetStateAction } from 'react'
import styles from '../styles/Modal.module.scss'
import {IoClose} from 'react-icons/io5'

interface IModalContent{
    visible: boolean,
    setVisible: Dispatch<SetStateAction<boolean>>
}

function ModalContent({visible, setVisible}: IModalContent){

    const modalStyles = visible ? styles.modalWrapper : [styles.modalWrapper, styles.invisible].join(' ')

    const closeModal = () => {
        setVisible(false)
    }

    return (
        <div onClick={closeModal} className={modalStyles}>
            <section className={styles.modalContainer}>
                <article className={styles.titleContainer}>
                    <h1 className={styles.modalTitle}>Евгений Савченко</h1>
                    <button onClick={closeModal} className={styles.closeBtn} type='button'><IoClose/></button>
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
        </div>
    )
}

export default ModalContent

