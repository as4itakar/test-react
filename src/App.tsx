import Card from './components/Card';
import ModalContent from './components/ModalContent';
import ModalPortal from './components/ModalPortal';
import styles from './styles/App.module.scss'
import {useCallback, useEffect, useRef, useState } from 'react';
import useFetching from './hooks/useFetching';
import { ApiRequests } from './api/ApiRequests';
import IUser from './models/entity/IUser';
import InputArea from './components/InputArea';
import Cards from './components/Cards';

function App() {

  const [users, setUsers] = useState<IUser[]>([])
  const [searchValue, setSearchValue] = useState<string>('')
  const [visible, setVisible] = useState<boolean>(false)
  const regularUsers = useRef<IUser[]>([])
  const userName = useRef<string>('')

  const [fetchingUsers, loadUsers, errorUsers] = useFetching( useCallback( async () => {
    const users: IUser[] = await ApiRequests.getUsers()
    setUsers(users)
    regularUsers.current = users
  },[]))

  const search = useCallback(() => {
    if (searchValue.trim() !== ''){
      const necUsers = regularUsers.current.filter( user => user.name.toLowerCase().includes(searchValue.toLowerCase()))
      setUsers(necUsers)
      return
    }
    setUsers(regularUsers.current)
  }, [searchValue])

  const openModal = (name: string) => {
    setVisible(true)
    userName.current = name
  }

  useEffect( () => {
    fetchingUsers()
  }, [])

  return (
    <main className={styles.wrapper}>
      <InputArea searchFunc={search} searchValue={searchValue} setSearchValue={setSearchValue}/>
      <Cards errorUsers={errorUsers} loadUsers={loadUsers} users={users} openModal={openModal}/>
      <ModalPortal><ModalContent visible={visible} setVisible={setVisible} userName={userName.current}/></ModalPortal>
    </main>
  );
}

export default App;
