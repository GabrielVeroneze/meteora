import styles from './ModalProdutoSelecao.module.scss'

interface ModalProdutoSelecaoProps {
    titulo: string
    name: string
    opcoes: string[]
}

const ModalProdutoSelecao = ({ titulo, name, opcoes }: ModalProdutoSelecaoProps) => {
    return (
        <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>{titulo}</legend>
            {opcoes.map(opcao => (
                <label key={opcao} className={styles.rotulo}>
                    <input
                        className={styles.entrada}
                        type="radio"
                        name={name}
                    />
                    {opcao}
                </label>
            ))}
        </fieldset>
    )
}

export default ModalProdutoSelecao
