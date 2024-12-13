import { useEffect, useState } from 'react'
import { Categoria } from '@/types/Categoria'
import api from '@/services/api'

export const useObterCategorias = () => {
    const [categorias, setCategorias] = useState<Categoria[]>([])

    useEffect(() => {
        buscarCategorias()
    }, [])

    const buscarCategorias = () => {
        api
            .get<Categoria[]>('categorias')
            .then(resposta => {
                setCategorias(resposta.data)
            })
    }

    return {
        categorias,
        setCategorias,
    }
}
