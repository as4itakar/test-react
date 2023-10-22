import ILine from '../models/component/ILine'
import styles from '../styles/Line.module.scss'

function Line({children, text}: ILine){

    return (
        <li className={styles.line}>{children} {text}</li>
    )
}

export default Line