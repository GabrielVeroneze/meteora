import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from '@/routes'
import '@/sass/_reset.scss'
import '@/sass/_global.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AppRoutes />
    </React.StrictMode>
)
