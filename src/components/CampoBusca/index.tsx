import { useState } from 'react'
import styles from './CampoBusca.module.scss'

const CampoBusca = () => {
    const [termoDeBusca, setTermoDeBusca] = useState<string>('')

    return (
        <div className={styles.campo}>
            <input
                className={styles.entrada}
                type="search"
                placeholder="Digite o produto"
                value={termoDeBusca}
                onChange={(evento) => setTermoDeBusca(evento.target.value)}
            />
            <button className={styles.botao}>Buscar</button>
        </div>
    )
}

export default CampoBusca
