import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from '@/routes'
import { ContextProvider } from '@/context/provider/ContextProvider'
import '@/sass/_reset.scss'
import '@/sass/_global.scss'
import 'swiper/css/bundle'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ContextProvider>
            <AppRoutes />
        </ContextProvider>
    </React.StrictMode>
)
