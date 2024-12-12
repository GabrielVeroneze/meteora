import { useState } from 'react'
import { Produto } from '@/types/Produto'
import { ModalProdutoContext } from './ModalProdutoContext'

interface ModalProdutoProviderProps {
    children: React.ReactNode
}

export const ModalProdutoProvider = ({ children }: ModalProdutoProviderProps) => {
    const [modalEstaAberto, setModalEstaAberto] = useState<boolean>(false)
    const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null)

    const abrirModal = (produto: Produto) => {
        setProdutoSelecionado(produto)
        setModalEstaAberto(true)
    }

    const fecharModal = () => {
        setModalEstaAberto(false)
    }

    return (
        <ModalProdutoContext.Provider
            value={{
                modalEstaAberto,
                produtoSelecionado,
                abrirModal,
                fecharModal,
            }}
        >
            {children}
        </ModalProdutoContext.Provider>
    )
}
