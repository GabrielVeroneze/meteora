import { useEffect, useState } from 'react'
import { Produto } from '@/types/Produto'
import api from '@/services/api'

export const useObterProdutos = () => {
    const [produtos, setProdutos] = useState<Produto[]>([])

    useEffect(() => {
        buscarProdutos()
    }, [])

    const buscarProdutos = () => {
        api
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
