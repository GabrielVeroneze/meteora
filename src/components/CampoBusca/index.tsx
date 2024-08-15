import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './CampoBusca.module.scss'

const CampoBusca = () => {
    const [termoDeBusca, setTermoDeBusca] = useState<string>('')
    const navigate = useNavigate()

    const handleSubmit = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        if (termoDeBusca.trim()) {
            navigate(`/search?query=${termoDeBusca}`)
        }
    }

    return (
        <form
            className={styles.campo}
            onSubmit={evento => handleSubmit(evento)}
        >
            <input
                className={styles.entrada}
                type="search"
                placeholder="Digite o produto"
                value={termoDeBusca}
                onChange={evento => setTermoDeBusca(evento.target.value)}
            />
            <button className={styles.botao}>Buscar</button>
        </form>
    )
}

export default CampoBusca
