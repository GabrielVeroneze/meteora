import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { jsonServerApi } from '@/services/api'
import { Produto } from '@/types/Produto'

export const useProdutosPorCategoria = () => {
    const { categoria } = useParams()
    const [produtos, setProdutos] = useState<Produto[]>([])

    useEffect(() => {
        if (categoria) {
            buscarProdutosPorCategoria(categoria)
        }
    }, [categoria])

    const buscarProdutosPorCategoria = (categoria: string) => {
        jsonServerApi
            .get<Produto[]>('produtos', {
                params: {
                    categoria: categoria,
                },
            })
            .then(resposta => {
                setProdutos(resposta.data)
            })
    }

    return {
        produtos,
        categoria,
    }
}
