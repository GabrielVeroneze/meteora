import Carrossel from './Carrossel'
import Categorias from './Categorias'
import Produtos from './Produtos'
import Facilidades from './Facilidades'
import Newsletter from './Newsletter'
import styles from './Home.module.scss'

const Home = () => {
    return (
        <>
            <Carrossel />
            <main className={styles.principal}>
                <Categorias />
                <Produtos />
            </main>
            <Facilidades />
            <Newsletter />
        </>
    )
}

export default Home
