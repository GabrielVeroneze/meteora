import { useEffect, useState } from 'react'
import { jsonServerApi } from '@/services/api'
import { Categoria } from '@/types/Categoria'

export const useObterCategorias = () => {
    const [categorias, setCategorias] = useState<Categoria[]>([])

    useEffect(() => {
        buscarCategorias()
    }, [])

    const buscarCategorias = () => {
        jsonServerApi
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
