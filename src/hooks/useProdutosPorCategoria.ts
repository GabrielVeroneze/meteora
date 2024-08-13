import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { jsonServerApi } from '@/services/api'
import { IProduto } from '@/types/IProduto'

export const useProdutosPorCategoria = () => {
    const { categoria } = useParams()
    const [produtos, setProdutos] = useState<IProduto[]>([])

    useEffect(() => {
        if (categoria) {
            buscarProdutosPorCategoria(categoria)
        }
    }, [categoria])

    const buscarProdutosPorCategoria = (categoria: string) => {
        jsonServerApi
            .get<IProduto[]>(`produtos?categoria=${categoria}`)
            .then(resposta => {
                setProdutos(resposta.data)
            })
    }

    return {
        produtos,
        categoria,
    }
}
