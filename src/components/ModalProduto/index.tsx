import { IModal } from '@/types/IModal'
import { IProduto } from '@/types/IProduto'
import Modal from '@/components/Modal'
import BotaoIcone from '@/components/BotaoIcone'
import Botao from '@/components/Botao'
import ModalProdutoInfo from './ModalProdutoInfo'
import ModalProdutoOpcao from './ModalProdutoOpcao'
import icones from '@/assets/icons'
import styles from './ModalProduto.module.scss'

interface ModalProdutoProps extends IModal {
    produto: IProduto | null
}

const ModalProduto = ({ produto, estaAberto, onFechar }: ModalProdutoProps) => {
    if (!produto) return null

    const { imagem, alt, nome, descricao, preco, fornecedor } = produto

    return (
        <Modal estaAberto={estaAberto}>
            <header className={styles.cabecalho}>
                <h4 className={styles.titulo}>
                    Confira detalhes sobre o produto
                </h4>
                <BotaoIcone icone={icones.fecharModal} onClick={onFechar} />
            </header>
            <section className={styles.conteudo}>
                <img
                    className={styles.imagem}
                    src={imagem}
                    alt={alt}
                />
                <ModalProdutoInfo
                    nome={nome}
                    descricao={descricao}
                    preco={preco}
                    fornecedor={fornecedor}
                />
                <form className={styles.formulario}>
                    <fieldset className={styles.fieldset}>
                        <legend className={styles.legend}>Cores:</legend>
                        <ModalProdutoOpcao
                            id="azul-claro"
                            name="cor"
                            label="Azul claro"
                        />
                        <ModalProdutoOpcao
                            id="offwhite"
                            name="cor"
                            label="Offwhite"
                        />
                        <ModalProdutoOpcao
                            id="preto"
                            name="cor"
                            label="Preto"
                        />
                    </fieldset>
                    <fieldset className={styles.fieldset}>
                        <legend className={styles.legend}>Tamanho:</legend>
                        <ModalProdutoOpcao
                            id="tamanho-p"
                            name="tamanho"
                            label="P"
                        />
                        <ModalProdutoOpcao
                            id="tamanho-pp"
                            name="tamanho"
                            label="PP"
                        />
                        <ModalProdutoOpcao
                            id="tamanho-m"
                            name="tamanho"
                            label="M"
                        />
                        <ModalProdutoOpcao
                            id="tamanho-g"
                            name="tamanho"
                            label="G"
                        />
                        <ModalProdutoOpcao
                            id="tamanho-gg"
                            name="tamanho"
                            label="GG"
                        />
                    </fieldset>
                    <Botao>Adicionar à sacola</Botao>
                </form>
            </section>
        </Modal>
    )
}

export default ModalProduto
