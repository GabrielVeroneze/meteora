export const transformarCategoria = (categoria: string) => {
    const mapeamento: { [key: string]: string } = {
        bolsas: 'Bolsas',
        calcados: 'Calçados',
        calcas: 'Calças',
        camisetas: 'Camisetas',
        casacos: 'Casacos',
        oculos: 'Óculos',
    }

    return mapeamento[categoria]
}
