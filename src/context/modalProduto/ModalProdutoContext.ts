import { createContext } from 'react'
import { IProduto } from '@/types/IProduto'

interface ModalProdutoContextType {
    modalEstaAberto: boolean
    produtoSelecionado: IProduto | null
    abrirModal: (produto: IProduto) => void
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
