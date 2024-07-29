import styles from './ItemFacilidade.module.scss'

interface ItemFacilidadeProps {
    titulo: string
    texto: string
    icone: string
    alt: string
}

const ItemFacilidade = ({ titulo, texto, icone, alt }: ItemFacilidadeProps) => {
    return (
        <li className={styles.item}>
            <img className={styles.icone} src={icone} alt={alt} />
            <h4 className={styles.titulo}>{titulo}</h4>
            <p className={styles.texto}>{texto}</p>
        </li>
    )
}

export default ItemFacilidade
