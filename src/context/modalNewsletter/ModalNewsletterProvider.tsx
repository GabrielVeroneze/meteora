import { useState } from 'react'
import { ModalNewsletterContext } from './ModalNewsletterContext'

interface ModalNewsletterProviderProps {
    children: React.ReactNode
}

export const ModalNewsletterProvider = ({ children }: ModalNewsletterProviderProps) => {
    const [modalEstaAberto, setModalEstaAberto] = useState<boolean>(false)

    const abrirModal = () => {
        setModalEstaAberto(true)
    }

    const fecharModal = () => {
        setModalEstaAberto(false)
    }

    return (
        <ModalNewsletterContext.Provider
            value={{ modalEstaAberto, abrirModal, fecharModal }}
        >
            {children}
        </ModalNewsletterContext.Provider>
    )
}
