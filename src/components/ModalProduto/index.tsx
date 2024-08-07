import { IModal } from '@/types/IModal'
import { IProduto } from '@/types/IProduto'
import Modal from '@/components/Modal'
import Botao from '@/components/Botao'
import ModalProdutoInfo from './ModalProdutoInfo'
import ModalProdutoSelecao from './ModalProdutoSelecao'
import styles from './ModalProduto.module.scss'

interface ModalProdutoProps extends IModal {
    produto: IProduto | null
}

const ModalProduto = ({ produto, estaAberto, onFechar }: ModalProdutoProps) => {
    if (!produto) return null

    const { imagem, alt, nome, descricao, preco, fornecedor } = produto

    return (
        <Modal
            titulo="Confira detalhes sobre o produto"
            estaAberto={estaAberto}
            onFechar={onFechar}
        >
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
                    <ModalProdutoSelecao
                        titulo="Cores:"
                        opcoes={[
                            { id: 'azul-claro', name: 'cor', label: 'Azul claro' },
                            { id: 'offwhite', name: 'cor', label: 'Offwhite' },
                            { id: 'preto', name: 'cor', label: 'Preto' },
                        ]}
                    />
                    <ModalProdutoSelecao
                        titulo="Tamanho:"
                        opcoes={[
                            { id: 'tamanho-p', name: 'tamanho', label: 'P' },
                            { id: 'tamanho-pp', name: 'tamanho', label: 'PP' },
                            { id: 'tamanho-m', name: 'tamanho', label: 'M' },
                            { id: 'tamanho-g', name: 'tamanho', label: 'G' },
                            { id: 'tamanho-gg', name: 'tamanho', label: 'GG' },
                        ]}
                    />
                    <Botao>Adicionar à sacola</Botao>
                </form>
            </section>
        </Modal>
    )
}

export default ModalProduto
