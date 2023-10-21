import Button from './components/Button';
import Card from './components/Card';
import Input from './components/Input';
import styles from './styles/App.module.scss'
import {BiSearch} from 'react-icons/bi'

function App() {
  return (
    <main className={styles.wrapper}>
      <section className={styles.inputContainer}>
        <Input/>
        <Button><BiSearch/></Button>
      </section>
      <section className={styles.cardsContainer}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </section>
    </main>
  );
}

export default App;
