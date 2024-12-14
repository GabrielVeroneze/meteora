import { Produto } from '@/types/Produto'
import api from '@/services/api'

export async function buscarProdutos(): Promise<Produto[]> {
    try {
        const resposta = await api.get<Produto[]>('produtos')
        return resposta.data
    } catch {
        throw new Error('Erro ao carregar os produtos.')
    }
}

export async function buscarProdutosPorNome(query: string): Promise<Produto[]> {
    try {
        const resposta = await api.get<Produto[]>('produtos', {
            params: {
                nome_like: query,
            },
        })
        return resposta.data
    } catch {
        throw new Error('Erro ao buscar os produtos pelo nome.')
    }
}

export async function buscarProdutosPorCategoria(categoria: string): Promise<Produto[]> {
    try {
        const resposta = await api.get<Produto[]>('produtos', {
            params: {
                categoria: categoria,
            },
        })
        return resposta.data
    } catch {
        throw new Error('Erro ao buscar os produtos pela categoria.')
    }
}
