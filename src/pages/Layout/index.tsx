import { Outlet } from 'react-router-dom'
import Cabecalho from './Cabecalho'
import Rodape from './Rodape'
import ModalProduto from '@/components/ModalProduto'

const Layout = () => {
    return (
        <>
            <Cabecalho />
            <Outlet />
            <Rodape />
            <ModalProduto />
        </>
    )
}

export default Layout
