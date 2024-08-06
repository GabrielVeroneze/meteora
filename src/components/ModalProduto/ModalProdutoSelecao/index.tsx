import styles from './ModalProdutoSelecao.module.scss'

interface ModalProdutoSelecaoProps {
    titulo: string
    opcoes: {
        id: string
        name: string
        label: string
    }[]
}

const ModalProdutoSelecao = ({ titulo, opcoes }: ModalProdutoSelecaoProps) => {
    return (
        <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>{titulo}</legend>
            {opcoes.map(opcao => (
                <label className={styles.rotulo} htmlFor={opcao.id}>
                    <input
                        className={styles.entrada}
                        type="radio"
                        name={opcao.name}
                        id={opcao.id}
                    />
                    {opcao.label}
                </label>
            ))}
        </fieldset>
    )
}

export default ModalProdutoSelecao
