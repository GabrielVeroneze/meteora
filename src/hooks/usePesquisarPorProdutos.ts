import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { jsonServerApi } from '@/services/api'
import { IProduto } from '@/types/IProduto'

export const usePesquisarPorProdutos = () => {
    const [produtos, setProdutos] = useState<IProduto[]>([])
    const location = useLocation()

    const queryParams = new URLSearchParams(location.search)
    const query = queryParams.get('query')

    useEffect(() => {
        if (query) {
            pesquisarProdutos(query)
        }
    }, [query])

    const pesquisarProdutos = (query: string) => {
        jsonServerApi
            .get<IProduto[]>('produtos', {
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
