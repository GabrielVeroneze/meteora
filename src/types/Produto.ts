import { ProdutoInfo } from '@/types/ProdutoInfo'

export interface Produto extends ProdutoInfo {
    id: number
    categoria: string
    imagem: string
    alt: string
}
