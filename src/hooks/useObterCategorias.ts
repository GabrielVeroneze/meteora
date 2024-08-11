import { useEffect, useState } from 'react'
import { jsonServerApi } from '@/services/api'
import { ICategoria } from '@/types/ICategoria'

export const useObterCategorias = () => {
    const [categorias, setCategorias] = useState<ICategoria[]>([])

    useEffect(() => {
        buscarCategorias()
    }, [])

    const buscarCategorias = () => {
        jsonServerApi
            .get<ICategoria[]>('categorias')
            .then(resposta => {
                setCategorias(resposta.data)
            })
    }

    return {
        categorias,
        setCategorias,
    }
}
