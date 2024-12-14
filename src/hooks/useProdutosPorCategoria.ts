import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { buscarProdutosPorCategoria } from '@/services/produtos'
import { Produto } from '@/types/Produto'

export const useProdutosPorCategoria = () => {
    const { categoria } = useParams()
    const [produtos, setProdutos] = useState<Produto[]>([])

    useEffect(() => {
        if (categoria) {
            carregarProdutosPorCategoria(categoria)
        }
    }, [categoria])

    const carregarProdutosPorCategoria = async (categoria: string) => {
        try {
            const produtosEncontrados = await buscarProdutosPorCategoria(categoria)
            setProdutos(produtosEncontrados)
        } catch (erro) {
            console.log(erro)
        }
    }

    return {
        produtos,
        categoria,
    }
}
