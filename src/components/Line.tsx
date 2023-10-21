import styles from '../styles/Line.module.scss'

interface ILine{
    children: React.ReactNode,
    text: string
}

function Line({children, text}: ILine){
    return (
        <li className={styles.line}>{children} {text}</li>
    )
}

export default Line