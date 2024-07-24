import Cabecalho from '@/components/Cabecalho'
import Carrossel from '@/components/Carrossel'
import Categorias from '@/components/Categorias'
import styles from './Home.module.scss'

const Home = () => {
    return (
        <>
            <Cabecalho />
            <Carrossel />
            <main className={styles.principal}>
                <Categorias />
            </main>
        </>
    )
}

export default Home
