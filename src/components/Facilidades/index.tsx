import ItemFacilidade from './ItemFacilidade'
import icones from '@/assets/icons'
import styles from './Facilidades.module.scss'

const Facilidades = () => {
    return (
        <section className={styles.secao}>
            <h3 className={styles.titulo}>
                Conheça todas as nossas facilidades
            </h3>
            <ul className={styles.lista}>
                <ItemFacilidade
                    titulo="Pague pelo pix"
                    texto="Ganhe 5% OFF em pagamentos via PIX"
                    icone={icones.cubo}
                    alt="Um símbolo de uma forma geométrica abstrata se assemelha a um cubo estilizado com linhas conectadas."
                />
                <ItemFacilidade
                    titulo="Troca grátis"
                    texto="Fique livre para trocar em até 30 dias."
                    icone={icones.setas}
                    alt="Um símbolo composto por duas setas, cada uma curvando-se ao redor da próxima, criando um loop contínuo."
                />
                <ItemFacilidade
                    titulo="Sustentabilidade"
                    texto="Moda responsável, que respeita o meio ambiente."
                    icone={icones.flor}
                    alt="Um símbolo floral amarelo-esverdeado com oito pétalas simétricas e um centro circular."
                />
            </ul>
        </section>
    )
}

export default Facilidades
