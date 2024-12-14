import { useEffect, useState } from 'react'
import { buscarProdutos } from '@/services/produtos'
import { Produto } from '@/types/Produto'

export const useObterProdutos = () => {
    const [produtos, setProdutos] = useState<Produto[]>([])

    useEffect(() => {
        carregarProdutos()
    }, [])

    const carregarProdutos = async () => {
        try {
            const produtosObtidos = await buscarProdutos()
            setProdutos(produtosObtidos)
        } catch (erro) {
            console.log(erro)
        }
    }

    return {
        produtos,
        setProdutos,
    }
}
