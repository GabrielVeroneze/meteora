import styles from './MensagemErro.module.scss'

interface MensagemErroProps {
    children: React.ReactNode
}

const MensagemErro = ({ children }: MensagemErroProps) => {
    return (
        <span className={styles.erro}>{children}</span>
    )
}

export default MensagemErro
