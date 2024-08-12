import Navegacao from '@/components/Navegacao'
import CampoBusca from '@/components/CampoBusca'
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
            <CampoBusca />
        </header>
    )
}

export default Cabecalho
