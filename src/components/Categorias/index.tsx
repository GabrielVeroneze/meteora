import { useObterCategorias } from '@/hooks/useObterCategorias'
import CardCategoria from './CardCategoria'
import styles from './Categorias.module.scss'

const Categorias = () => {
    const { categorias } = useObterCategorias()

    return (
        <section className={styles.categorias}>
            <h3 className={styles.titulo}>Busque por categoria:</h3>
            <ul className={styles.lista}>
                {categorias.map(categoria => (
                    <li key={categoria.id}>
                        <CardCategoria {...categoria} />
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Categorias
