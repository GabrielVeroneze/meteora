import { useContext } from 'react'
import { ModalProdutoContext } from './ModalProdutoContext'

export const useModalProduto = () => {
    const {
        modalEstaAberto,
        produtoSelecionado,
        abrirModal,
        fecharModal,
    } = useContext(ModalProdutoContext)

    return {
        modalEstaAberto,
        produtoSelecionado,
        abrirModal,
        fecharModal,
    }
}
