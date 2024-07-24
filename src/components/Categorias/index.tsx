import CardCategoria from './CardCategoria'
import categorias from '@/data/categorias.json'
import styles from './Categorias.module.scss'

const Categorias = () => {
    return (
        <section className={styles.categorias}>
            <h3 className={styles.titulo}>Busque por categoria:</h3>
            <div className={styles.cards}>
                {categorias.map(categoria => (
                    <CardCategoria key={categoria.id} {...categoria} />
                ))}
            </div>
        </section>
    )
}

export default Categorias
