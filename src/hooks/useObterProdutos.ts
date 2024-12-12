import { useEffect, useState } from 'react'
import { jsonServerApi } from '@/services/api'
import { Produto } from '@/types/Produto'

export const useObterProdutos = () => {
    const [produtos, setProdutos] = useState<Produto[]>([])

    useEffect(() => {
        buscarProdutos()
    }, [])

    const buscarProdutos = () => {
        jsonServerApi
            .get<Produto[]>('produtos')
            .then(resposta => {
                setProdutos(resposta.data)
            })
    }

    return {
        produtos,
        setProdutos,
    }
}
