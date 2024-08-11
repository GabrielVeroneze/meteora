import { useEffect, useState } from 'react'
import { jsonServerApi } from '@/services/api'
import { IProduto } from '@/types/IProduto'

export const useObterProdutos = () => {
    const [produtos, setProdutos] = useState<IProduto[]>([])

    useEffect(() => {
        buscarProdutos()
    }, [])

    const buscarProdutos = () => {
        jsonServerApi
            .get<IProduto[]>('produtos')
            .then(resposta => {
                setProdutos(resposta.data)
            })
    }

    return {
        produtos,
        setProdutos,
    }
}
