import styles from './ModalProdutoOpcao.module.scss'

interface ModalProdutoOpcaoProps {
    id: string
    name: string
    label: string
}

const ModalProdutoOpcao = ({ id, name, label }: ModalProdutoOpcaoProps) => {
    return (
        <div className={styles.opcao}>
            <input
                className={styles.entrada}
                type="radio"
                name={name}
                id={id}
            />
            <label className={styles.rotulo} htmlFor={id}>
                {label}
            </label>
        </div>
    )
}

export default ModalProdutoOpcao
