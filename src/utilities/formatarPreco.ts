export const formatarPrecoEmReal = (preco: number) => {
    const precoFormatado = preco.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    })

    return precoFormatado
}
