import IUser from '../models/IUser'
import styles from '../styles/Cards.module.scss'
import Card from './Card'

interface ICards{
    errorUsers: string,
    loadUsers: boolean,
    users: IUser[],
    openModal: (name: string) => void
}

function Cards({errorUsers, loadUsers, users, openModal}: ICards){
    return (
        <section className={styles.cardsContainer}>
        {
          errorUsers && <h1>Что-то пошло не так... ({errorUsers})</h1>
        }
        {
          loadUsers ?
            <h1>Загрузка...</h1>
                    :
            users.map( user => <Card key={user.email} fullName={user.name} phoneNumber={user.phone} mail={user.email} openModal={openModal}/>)
        }
      </section>
    )
}

export default Cards