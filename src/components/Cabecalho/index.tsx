import Navegacao from '@/components/Navegacao'
import logo from '@/assets/images/logo-clara.png'
import styles from './Cabecalho.module.scss'

const Cabecalho = () => {
    return (
        <header className={styles.cabecalho}>
            <img
                className={styles.imagem}
                src={logo}
                alt="Logotipo da Meteora"
            />
            <Navegacao />
            <input className={styles.campo} type="text" />
            <button className={styles.botao}>Buscar</button>
        </header>
    )
}

export default Cabecalho
