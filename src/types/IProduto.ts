import { IProdutoInfo } from './IProdutoInfo'

export interface IProduto extends IProdutoInfo {
    imagem: string
    alt: string
}
