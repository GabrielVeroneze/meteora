import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Produto } from '@/types/Produto'
import api from '@/services/api'

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

    const pesquisarProdutos = (query: string) => {
        api
            .get<Produto[]>('produtos', {
                params: {
                    nome_like: query,
                },
            })
            .then(resposta => {
                setProdutos(resposta.data)
            })
    }

    return {
        produtos,
    }
}
