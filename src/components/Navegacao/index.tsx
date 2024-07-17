import { useState } from 'react'
import BotaoIcone from '@/components/BotaoIcone'
import ItemNavegacao from './ItemNavegacao'
import icones from '@/assets/icons'
import styles from './Navegacao.module.scss'

const Navegacao = () => {
    const [menuAberto, setMenuAberto] = useState<boolean>(false)

    const toggleMenu = () => setMenuAberto(!menuAberto)

    return (
        <nav
            className={`
                ${styles.navegacao}
                ${menuAberto ? styles.aberto : styles.fechado}
            `}
        >
            <BotaoIcone
                icone={menuAberto ? icones.fechar : icones.menu}
                onClick={toggleMenu}
            />
            <ul className={styles.lista}>
                <ItemNavegacao to="/">Home</ItemNavegacao>
                <ItemNavegacao to="/lojas">Nossas lojas</ItemNavegacao>
                <ItemNavegacao to="/novidades">Novidades</ItemNavegacao>
                <ItemNavegacao to="/promocoes">Promoções</ItemNavegacao>
            </ul>
        </nav>
    )
}

export default Navegacao
