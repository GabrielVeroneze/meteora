import { useEffect, useState } from 'react'
import { buscarCategorias } from '@/services/categorias'
import { Categoria } from '@/types/Categoria'

export const useObterCategorias = () => {
    const [categorias, setCategorias] = useState<Categoria[]>([])

    useEffect(() => {
        carregarCategorias()
    }, [])

    const carregarCategorias = async () => {
        try {
            const categoriasObtidas = await buscarCategorias()
            setCategorias(categoriasObtidas)
        } catch (erro) {
            console.log(erro)
        }
    }

    return {
        categorias,
        setCategorias,
    }
}
