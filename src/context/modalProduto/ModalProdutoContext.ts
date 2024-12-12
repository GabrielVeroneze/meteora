import { createContext } from 'react'
import { Produto } from '@/types/Produto'

interface ModalProdutoContextType {
    modalEstaAberto: boolean
    produtoSelecionado: Produto | null
    abrirModal: (produto: Produto) => void
    fecharModal: () => void
}

const defaultValue: ModalProdutoContextType = {
    modalEstaAberto: false,
    produtoSelecionado: null,
    abrirModal: () => {},
    fecharModal: () => {},
}

export const ModalProdutoContext = createContext<ModalProdutoContextType>(defaultValue)
ModalProdutoContext.displayName = 'ModalProduto'
