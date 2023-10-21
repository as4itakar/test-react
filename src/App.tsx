import Button from './components/Button';
import Card from './components/Card';
import Input from './components/Input';
import ModalContent from './components/ModalContent';
import ModalPortal from './components/ModalPortal';
import styles from './styles/App.module.scss'
import {BiSearch} from 'react-icons/bi'
import { useEffect, useRef, useState } from 'react';
import useFetching from './hooks/useFetching';
import { ApiRequests } from './api/ApiRequests';
import IUser from './models/IUser';

function App() {

  const [users, setUsers] = useState<IUser[]>([])
  const regularUsers = useRef<IUser[]>([])
  const [searchValue, setSearchValue] = useState<string>('')
  const [visible, setVisible] = useState<boolean>(false)

  const [fetchingUsers, loadUsers, errorUsers] = useFetching( async () => {
    const users: IUser[] = await ApiRequests.getUsers()
    setUsers(users)
    regularUsers.current = users
  })

  const search = () => {
    if (searchValue.trim() !== ''){
      const necUsers = regularUsers.current.filter( user => user.name.toLowerCase().includes(searchValue.toLowerCase()))
      setUsers(necUsers)
      return
    }
    setUsers(regularUsers.current)
  }

  const openModal = (name: string) => {
    setVisible(true)
  }

  useEffect( () => {
    fetchingUsers()
  }, [])

  return (
    <main className={styles.wrapper}>
      <section className={styles.inputContainer}>
        <Input searchValue={searchValue} setValue={setSearchValue}/>
        <Button searchUser={search}><BiSearch/></Button>
      </section>
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
      <ModalPortal><ModalContent visible={visible} setVisible={setVisible}/></ModalPortal>
    </main>
  );
}

export default App;
