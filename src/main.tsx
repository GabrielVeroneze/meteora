import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from '@/routes'
import '@/sass/_reset.scss'
import '@/sass/_global.scss'
import 'swiper/css/bundle'
import { ModalProdutoProvider } from '@/context/modalProduto/ModalProdutoProvider'
import { ModalNewsletterProvider } from '@/context/modalNewsletter/ModalNewsletterProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ModalProdutoProvider>
            <ModalNewsletterProvider>
                <AppRoutes />
            </ModalNewsletterProvider>
        </ModalProdutoProvider>
    </React.StrictMode>
)
