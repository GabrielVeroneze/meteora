import Cabecalho from '@/components/Cabecalho'
import Carrossel from '@/components/Carrossel'
import Categorias from '@/components/Categorias'
import Produtos from '@/components/Produtos'
import Facilidades from '@/components/Facilidades'
import styles from './Home.module.scss'

const Home = () => {
    return (
        <>
            <Cabecalho />
            <Carrossel />
            <main className={styles.principal}>
                <Categorias />
                <Produtos />
            </main>
            <Facilidades />
        </>
    )
}

export default Home
