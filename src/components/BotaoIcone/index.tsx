import styles from './BotaoIcone.module.scss'

interface BotaoIconeProps {
    icone: string
    onClick?: () => void
}

const BotaoIcone = ({ icone, onClick }: BotaoIconeProps) => {
    return (
        <button className={styles.botao} onClick={onClick}>
            <img
                className={styles.imagem}
                src={icone}
                alt="Ícone do botão"
            />
        </button>
    )
}

export default BotaoIcone
