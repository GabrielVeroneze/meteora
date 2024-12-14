import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { buscarProdutosPorNome } from '@/services/produtos'
import { Produto } from '@/types/Produto'

export const usePesquisarPorProdutos = () => {
    const [produtos, setProdutos] = useState<Produto[]>([])
    const location = useLocation()

    const queryParams = new URLSearchParams(location.search)
    const query = queryParams.get('query')

    useEffect(() => {
        if (query) {
            pesquisarProdutos(query)
        }
    }, [query])

    const pesquisarProdutos = async (query: string) => {
        try {
            const produtosEncontrados = await buscarProdutosPorNome(query)
            setProdutos(produtosEncontrados)
        } catch (erro) {
            console.log(erro)
        }
    }

    return {
        produtos,
    }
}
