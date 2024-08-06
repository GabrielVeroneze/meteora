import styles from './ModalProdutoOpcao.module.scss'

interface ModalProdutoOpcaoProps {
    titulo: string
    opcoes: {
        id: string
        name: string
        label: string
    }[]
}

const ModalProdutoOpcao = ({ titulo, opcoes }: ModalProdutoOpcaoProps) => {
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

export default ModalProdutoOpcao
