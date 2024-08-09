import { createContext } from 'react'

interface ModalNewsletterContextType {
    modalEstaAberto: boolean
    abrirModal: () => void
    fecharModal: () => void
}

const defaultValue: ModalNewsletterContextType = {
    modalEstaAberto: false,
    abrirModal: () => {},
    fecharModal: () => {},
}

export const ModalNewsletterContext = createContext<ModalNewsletterContextType>(defaultValue)
ModalNewsletterContext.displayName = 'ModalNewsletter'
