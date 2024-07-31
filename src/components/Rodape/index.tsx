import styles from './Rodape.module.scss'

const Rodape = () => {
    return (
        <footer className={styles.rodape}>
            <p className={styles.texto}>
                2024 © Desenvolvido por{' '}
                <a href="https://github.com/GabrielVeroneze" target="_blank">
                    Gabriel
                </a>{' '}
                | Projeto fictício sem fins comerciais.
            </p>
        </footer>
    )
}

export default Rodape
