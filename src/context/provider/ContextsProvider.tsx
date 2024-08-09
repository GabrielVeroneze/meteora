import { ModalProdutoProvider } from '@/context/modalProduto/ModalProdutoProvider'
import { ModalNewsletterProvider } from '@/context/modalNewsletter/ModalNewsletterProvider'

interface ContextProviderProps {
    children: React.ReactNode
}

export const ContextProvider = ({ children }: ContextProviderProps) => {
    return (
        <ModalProdutoProvider>
            <ModalNewsletterProvider>
                {children}
            </ModalNewsletterProvider>
        </ModalProdutoProvider>
    )
}
