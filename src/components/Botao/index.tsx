import styles from './Botao.module.scss'

interface BotaoProps {
    children: string
    onClick?: () => void
}

const Botao = ({ children, onClick }: BotaoProps) => {
    return (
        <button className={styles.botao} onClick={onClick}>
            {children}
        </button>
    )
}

export default Botao
