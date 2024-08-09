import { useContext } from 'react'
import { ModalNewsletterContext } from './ModalNewsletterContext'

export const useModalNewsletter = () => {
    const {
        modalEstaAberto,
        abrirModal,
        fecharModal,
    } = useContext(ModalNewsletterContext)

    return {
        modalEstaAberto,
        abrirModal,
        fecharModal,
    }
}
