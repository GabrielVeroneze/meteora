import styles from './CampoBusca.module.scss'

const CampoBusca = () => {
    return (
        <div className={styles.campo}>
            <input
                className={styles.entrada}
                type="search"
                placeholder="Digite o produto"
            />
            <button className={styles.botao}>Buscar</button>
        </div>
    )
}

export default CampoBusca
