import { SyntheticEvent, useEffect, useMemo, useState } from 'react'
import styles from '../styles/Modal.module.scss'
import {IoClose} from 'react-icons/io5'
import useFetching from '../hooks/useFetching'
import IUser from '../models/entity/IUser'
import { ApiRequests } from '../api/ApiRequests'
import React from 'react'
import IModalContent from '../models/component/IModalContent'

export default React.memo(function ModalContent({visible, setVisible, userName}: IModalContent){

    const [user, setUser] = useState<IUser>({} as IUser)

    const modalStyles = useMemo( () => {
        return visible ? styles.modalWrapper : [styles.modalWrapper, styles.invisible].join(' ')
    }, [visible])

    const [fetchingUser, loadUser, errorUser] = useFetching( async () => {
        const user = await ApiRequests.getUser(userName)
        setUser(user[0])
    })

    useEffect( () => {
        if (visible){
            fetchingUser()
        }
    }, [userName])

    const closeModal = () => {
        setVisible(false)
    }

    return (
        <div onClick={closeModal} className={modalStyles}>
            <section onClick={(e: SyntheticEvent) => e.stopPropagation()} className={styles.modalContainer}>
                {
                    loadUser ?
                        <div>
                            <h1 key='modal-load' className={styles.globalTitle}>Загрузка...</h1>
                        </div>
                             :
                        <div>
                            <article className={styles.titleContainer}>
                                <h1 className={styles.modalTitle}>{errorUser? 'Что-то пошло не так...' : user?.name}</h1>
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
                                    <li title={user?.phone} className={styles.cutRow}>{user?.phone}</li>
                                    <li title={user?.email} className={styles.cutRow}>{user?.email}</li>
                                    <li title={user?.hire_date} className={styles.cutRow}>{user?.hire_date}</li>
                                    <li title={user?.position_name} className={styles.cutRow}>{user?.position_name}</li>
                                    <li title={user?.department} className={styles.cutRow}>{user?.department}</li>
                                </ul>
                            </article>
                            <article className="infoContainer">
                                <h1 className={styles.infoTitle}>Дополнительная информация:</h1>
                                <p className={styles.modalParagraph}>{user?.address}</p>
                            </article>
                        </div>
                }
            </section>
        </div>
    )
})