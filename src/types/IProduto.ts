import { IProdutoInfo } from './IProdutoInfo'

export interface IProduto extends IProdutoInfo {
    id: number
    categoria: string
    imagem: string
    alt: string
}
