import { Outlet } from 'react-router-dom'
import Cabecalho from './Cabecalho'
import Rodape from './Rodape'
import ModalProduto from '@/components/ModalProduto'
import ModalNewsletter from '@/components/ModalNewsletter'

const Layout = () => {
    return (
        <>
            <Cabecalho />
            <Outlet />
            <Rodape />
            <ModalProduto />
            <ModalNewsletter />
        </>
    )
}

export default Layout
