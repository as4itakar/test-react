import ICards from '../models/component/ICards'
import styles from '../styles/Cards.module.scss'
import Card from './Card'

function Cards({errorUsers, loadUsers, users, openModal}: ICards){
    return (
        <section className={styles.cardsContainer}>
        {
          errorUsers && 
            <h1 key='cards-error'>Что-то пошло не так... ({errorUsers})</h1>
        }
        {
          loadUsers ?
                <h1 key='cards-load'>Загрузка...</h1>
                    :
                users.map( user => <Card key={user.email} fullName={user.name} phoneNumber={user.phone} mail={user.email} openModal={openModal}/>)

        }
      </section>
    )
}

export default Cards