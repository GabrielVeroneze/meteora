import icones from '@/assets/icons'
import styles from './Facilidades.module.scss'

const Facilidades = () => {
    return (
        <section className={styles.secao}>
            <h3 className={styles.titulo}>
                Conheça todas as nossas facilidades
            </h3>
            <ul className={styles.lista}>
                <li className={styles.item}>
                    <img
                        className={styles.icone}
                        src={icones.cubo}
                        alt="Um símbolo de uma forma geométrica abstrata se assemelha a um cubo estilizado com linhas conectadas."
                    />
                    <h4 className={styles.subtitulo}>Pague pelo pix</h4>
                    <p className={styles.texto}>
                        Ganhe 5% OFF em pagamentos via PIX
                    </p>
                </li>
                <li className={styles.item}>
                    <img
                        className={styles.icone}
                        src={icones.setas}
                        alt="Um símbolo composto por duas setas, cada uma curvando-se ao redor da próxima, criando um loop contínuo."
                    />
                    <h4 className={styles.subtitulo}>Troca grátis</h4>
                    <p className={styles.texto}>
                        Fique livre para trocar em até 30 dias.
                    </p>
                </li>
                <li className={styles.item}>
                    <img
                        className={styles.icone}
                        src={icones.flor}
                        alt="Um símbolo floral amarelo-esverdeado com oito pétalas simétricas e um centro circular."
                    />
                    <h4 className={styles.subtitulo}>Sustentabilidade</h4>
                    <p className={styles.texto}>
                        Moda responsável, que respeita o meio ambiente.
                    </p>
                </li>
            </ul>
        </section>
    )
}

export default Facilidades
